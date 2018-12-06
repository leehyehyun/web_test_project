window.onload=function(){
    document.log_f.onsubmit=function(){
        var id_v = document.log_f.user_id.value;
        var pw_value = document.log_f.user_pw.value;
        alert(id_v);
    }
}