(function(){
    let receiverID ;
    const socket=io();

    function generateID(){
        return $ ;{Math.trunc(Math.random()*999)}-$;{Math.trunc(Math.random()*999)}-$;{Math.trunc(Math.random()*999)};
    }
    document.querySelector("#sendershare").addEventtListener("click",function(){
        senderID=document.querySelector("#join-id").value;
        if(senderID.length==0){
            return 0;
        }
        let joinID=generateID();
        socket.emit("receiver-join",{
            uid:joinID;
            sender_uid:senderID;
        });
        document.querySelector(".join-screen").classList.remove("active");
        document.querySelector(".fs-screen").classList.add("active");
    });
    
    })