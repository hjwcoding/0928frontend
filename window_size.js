window.onload = function () {
    document.getElementById("window_screen").innerHTML = "window_screen:  " +screen.width + ", " + screen.height;
    window.addEventListener('resize',function(){
        document.getElementById("window_outer").innerHTML = "window_outer:  " + `${window.outerWidth},${window.outerHeight}`
    }
    )
    window.addEventListener('resize',function(){
        document.getElementById("window_inner").innerHTML = "window_inner:  " + `${window.innerWidth},${window.innerHeight}`
    }
    )
    window.addEventListener('resize',function(){
        document.getElementById("DocumentElement_clientWidth").innerHTML = "DocumentElement_clientWidth:  " + `${this.document.documentElement.clientWidth},${this.document.documentElement.clientHeight}`
    }
    )
    };
