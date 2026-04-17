var state = {
    role: null,
    isSignup: false,
    selectedSector: 'Clinic',
    bufferTime: 10,
    currentProvider: null,
    currentBizIndex:null,
    selectedService:null,
    clientName: 'Guest',
    appointments:[],

    business:[
        {
            name:'City Dental',
            sector:'Clinic',
            distance:'1.2 km',
            status:'Open Now',
            location:'14 Nile St, Cairo',
            slots:[
                {date:'10-05-2026', time:'9:00'},
                {date:'10-05-2026', time:'10:30'},
                {date:'10-05-2026', time:'14:00'}
            ],
            services:[
                {name: 'General Checkup', duration: 20},
                {name: 'Deep Cleaning', duration: 45},
                {name: 'X-Ray / Scan', duration: 15}
            ],
            feautures: {ai: true, pay: true, doc: false, arr: false, dur: true, email: false},
            appointments:[],
            delayActive: false,
            delayMessage: ''
        },
        {
            name: 'Downtown Gym',
            sector: 'Gym',
            distance:'0.5 Km',
            status: 'Open 24/7',
            location: '7 Tahrir Square, Cairo',
            slots:[
                {date:'09-05-2026', time:'9:00'},
                {date:'09-05-2026', time:'8:00'},
                {date:'10-05-2026', time:'18:00'}
            ],
            services:[
                {name: 'Personal Training', duration:60},
                {name: 'Group Class', duration:45},
                {name: 'Open Gym', duration:90}
            ],
            feautures: {ai: true, pay: true, doc: false, arr: true, dur: true, email: true},
            appointments:[],
            delayActive: false,
            delayMessage: ''
        },
        {
            name:'National Bank',
            sector:'Bank',
            distance:'2.0 Km',
            status:'Closes 5 PM',
            location: '3 Banking District, Cairo',
            slots:[
                {date: '12-5-2026', time: '11:00'},
                {date: '12-5-2026', time: '13:00'},
                {date: '13-5-2026', time: '15:00'}
            ],
            services:[
                {name: 'Account Opening', duration: 30},
                {name: 'Loan Consulation', duration: 45},
                {name: 'General Inquiry', duration: 15}
            ],
            features:{ai: true, pay: false, doc: false, arr: false, dur: true, email: true},
            appointments: [],
            delayActive: false,
            delayMessage: ''
        }
    ]
};

// business setup
function selectSector(el, sector) {
    state.selectedSector = sector;
    var items = document.querySelectorAll('.sector-item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    el.classList.add('active');
}

function addSlot() {
    var dateVal = document.getElementById('slot-date').value;
    var timeVal = document.getElementById('slot-time').value;

    if (!dateVal || !timeVal) {
        alert('Please choose both a date and a time.');
        return;
    }

    var label = formatDate(dateVal) + ' · ' + formatTime(timeVal);
    var wrap = document.getElementById('slots-wrap');

    var tag = document.createElement('div');
    tag.className = 'slot-tag';
    tag.dataset.date = dateVal;
    tag.dataset.time = timeVal;
    tag.innerHTML = '<span>' + label + '</span>'
        + '<span class="remove" onclick="this.parentElement.remove()">×</span>';
    wrap.appendChild(tag);

    // Clear inputs
    document.getElementById('slot-date').value = '';
    document.getElementById('slot-time').value = '';
}

function adjustBuffer(val) {
    state.bufferTime = Math.max(0, state.bufferTime + val);
    document.getElementById('buffer-val').textContent = state.bufferTime;
}

function getHostFeatures() {
    return {
        ai: document.getElementById('feat-ai').checked,
        pay: document.getElementById('feat-pay').checked,
        doc: document.getElementById('feat-doc').checked,
        arr: document.getElementById('feat-arr').checked,
        dur: document.getElementById('feat-dur').checked,
        email: document.getElementById('feat-email').checked
    };
}

function publishBusiness() {
    var name = document.getElementById('business-name').value.trim();
    var location = document.getElementById('business-location').value.trim();

    if (!name) {
        alert('Please enter a Business Name.');
        return;
    }

    var slotTags = document.querySelectorAll('#slots-wrap .slot-tag');
    var slots = [];
    for (var i = 0; i < slotTags.length; i++) {
        slots.push({
            date: slotTags[i].dataset.date,
            time: slotTags[i].dataset.time
        });
    }

    if (slots.length === 0) {
        alert('Please add at least one appointment slot.');
        return;
    }

    var newBiz = {
        name: name,
        sector: state.selectedSector,
        distance: location ? '—' : 'New',
        status: 'Open Now',
        location: location || 'Location not set',
        slots: slots,
        services: [
            { name: 'General Appointment', duration: 30 },
            { name: 'Consultation', duration: 20 },
            { name: 'Follow-up', duration: 15 }
        ],
        features: getHostFeatures(),
        appointments: [],
        delayActive: false,
        delayMessage: ''
    };

    state.businesses.push(newBiz);
    state.currentBizIndex = state.businesses.length - 1;

    // Reset the setup form
    document.getElementById('business-name').value = '';
    document.getElementById('business-location').value = '';
    document.getElementById('slots-wrap').innerHTML = '';

    navigateTo('host-manager');
}