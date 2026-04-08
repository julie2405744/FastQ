if(localStorage.getItem('fq-theme')=== 'dark'){
    document.body.classList.add('dark');
    document.getElementById('dark-knob').textContent='☀️';
}

function toggleDark(){
    document.body.classList.toggle('dark');
    var isDark=document.body.classList.contains('dark');
    document.getElemmentById('dark-knob').textContent = isDark ? '☀️': '🌙';
    localStorage.setItem('fg-theme',isDark ? 'Dark':'light');

}
    window.addEventListener('storage',function(e) {
        if(e.key === 'fg-theme') {
            var isDark=e.newvalue === 'dark';
            document.body.classList.toggle('dark',isDark);
            this.document.getElementById('dark-knob').textContent= isDark? '☀️' : '🌙';
        }
    });

    function navigateTO(viewId,role){
        if(role!==undefined){
            state.role=role;
        }

        var allViews=document.querySelectorAll('.view');
        for(var i=0;i<allViews.length;i++){
            allViews[i].classList.remove('active');
        }
        var target=document.getElementById(viewId);
        if(target){
            target.classList.add('active');
        }

        window.scrollTo(0,0);

        if(viewId==='gateway-view'){
            if(timerInterval){
                clearInterval(timerInterval);
                timerInterval=null;
            }
            state.role=null;
            state.currentBizIndex=null;
            document.getElementById('nav-logout').style.display='none';

            document.getElementById('auth-submit').textContent='login';
            document.getElementById('login-tab').classList.add('active');
            document.getElementById('signup-tab').classList.remove('active');
            document.getElementById('signup-fields').classList.add('hidden');
            document.getElementById('email').value='';
            document.getElementById('password').value='';
            state.isSignup=false;
        }

        if(viewId ==='host-dashboard' || viewId==='host-manager' ||
            viewId === 'user-dashboard' || viewId === 'provider-view' || viewId === 'live-view') {
                document.getElementById('nav-logout').style.display='inline-block';
            }
        

        if(viewId ==='user-dashboard'){
            renderCategoryGrid();
            renderCalender();
        }
        if(viewId === 'host-manager'){
            renderManager();
        }
    }
    function logoutToGateway(){
        navigateTO('gateway-view');
    }


    function switchTab(mode){
        state.isSignup =(mode==='signup');


        if(state.isSignup){
        document.getElementById('signup-fields').classList.remove('hidden');
        document.getElementById('auth-submit').textContent='sign up';
        document.getElementById('signup-tab').classList.add('active');
        document.getElementById('login-tab').classList.remove('active');
    }else{
        document.getElementById('signup-fields').classList.add('hidden');
        document.getElementById('auth-submit').textContent='Login';
        document.getElementById('signup-tab').classList.add('active');
        document.getElementById('login-tab').classList.remove('active');

    }
 
}


    


