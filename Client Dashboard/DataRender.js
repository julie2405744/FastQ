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