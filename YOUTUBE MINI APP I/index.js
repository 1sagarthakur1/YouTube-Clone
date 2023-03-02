// const api_key = "AIzaSyDhAEu24NQThqTjrSHrnu9RLAK-h2VW31Q";
    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=${api_key}`;
    // console.log(url)

    let rendemvideo = async()=>{
        //   event.preventDefault()
            try{
            // let query = document.querySelector("#query").value
            let rendem ;
            let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${rendem}&key=AIzaSyDhAEu24NQThqTjrSHrnu9RLAK-h2VW31Q`;
            let res = await fetch(url);
            let Data = await res.json();
            // console.log(Data)
            // console.log(Data.items)
            rendomappendData(Data.items)
        }
        catch(err){
            console.log(err)
        }

    }
    rendemvideo()

    let rendomappendData = (ForData)=>{
        // console.log(ForData)
       var Bigcontainer = document.querySelector("#Bigcontainer");
           Bigcontainer.innerHTML=null
         
       ForData.forEach(({id:{videoId},snippet:{title}})=>{
        //    console.log(videoId,url)
           let div = document.createElement("div");
               div.addEventListener("dblclick", function(){
                   forbigsize(videoId,title)
               })
               div.setAttribute("id","innerdiv")

           let iframe = document.createElement("iframe");
               iframe.src= `https://www.youtube.com/embed/${videoId}`;
               iframe.setAttribute("id","video");

           let h3 = document.createElement("h4");
               h3.innerText = title;

           div.append(iframe,h3);
           document.querySelector("#Bigcontainer").append(div)


       })
    }
    
    
// _____________________________________________________________________________
    let search = async()=>{
          event.preventDefault()
            try{
            let query = document.querySelector("#query").value
            let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDhAEu24NQThqTjrSHrnu9RLAK-h2VW31Q`;
            let res = await fetch(url);
            let Data = await res.json();
            // console.log(Data)
            // console.log(Data.items)
            appendData(Data.items)
        }
        catch(err){
            console.log(err)
        }

    }

    let appendData = (ForData)=>{
        console.log(ForData)
       var Bigcontainer = document.querySelector("#Bigcontainer");
           Bigcontainer.innerHTML=null
         
       ForData.forEach(({id:{videoId},snippet:{title}})=>{
        //    console.log(videoId,url)
           let div = document.createElement("div");
               div.setAttribute("id","innerdiv")
               div.addEventListener("dblclick", function(){
                   forbigsize(videoId,title)
               })

           let iframe = document.createElement("iframe");
               iframe.src= `https://www.youtube.com/embed/${videoId}`;
               iframe.setAttribute("id","video");

           let h3 = document.createElement("h4");
               h3.innerText = title;

           div.append(iframe,h3);
           document.querySelector("#Bigcontainer").append(div)
       })
    }
    
    let  forbigsize = (videoId,title)=>{
        console.log(videoId,title)
        var aa = document.querySelector("#Bigcontainer");
            aa.innerHTML=null;

        let biginnerdiv = document.createElement("div");
            biginnerdiv.setAttribute("id","bigdiv")

        let iframe = document.createElement("iframe");
            iframe.src= `https://www.youtube.com/embed/${videoId}`;
            iframe.setAttribute("id","bigvideo");

        let h3 = document.createElement("h3");
            h3.innerText = title;

            biginnerdiv.append(iframe,h3)
            document.querySelector("#Bigcontainer").append(biginnerdiv)
    }
    
    


    // <iframe 
    //  src="https://www.youtube.com/embed/AqyWfisjCFQ"
    //   title="YouTube video player" 
    //   frameborder="0" 
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    //   </iframe>