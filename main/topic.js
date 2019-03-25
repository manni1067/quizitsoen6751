
    document.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(e.target);
        //getting userType from local storage
        const user = localStorage.getItem("userType");
        console.log(user);


        //saving to local storage getting the category
        var e = document.getElementById("comboBox");
        var category  = e.options[e.selectedIndex].value;
        localStorage.setItem("category",category);

        if (user==="adults"){
            window.location.assign("adult.html");
        }
        else if (user==="teen"){
            window.location.assign("teen.html");
        }
        else window.location.assign("teen.html");



    })

    //used by the addOption_list method to dynamically add options to the select view
    function addOption(selectBox,text,value )
    {
        var optn = document.createElement("Option");
        optn.text = text;
        optn.value = value;
        selectBox.options.add(optn);
    }

    //uses the addOption method to dynamically add options to the select view
    function addOption_list(){
        //test
        var userType = localStorage.getItem("userType");

        var adultsTopics = new Array(
            "Entertainment: Cartoon & Animations",
            "Entertainment: Comics",
            "Science: Mathematics",
            "Entertainment: Video Games",
            "General Knowledge",
            "Animals",
            "Science: Gadgets",
            "Sports",
            "Entertainment: Board Games",
            "Vehicles",
            "Entertainment: Japanese Anime & Manga",
            "Celebrities","Geography","Politics","Science: Computers","Entertainment: Film","Entertainment: Music"
        );

        var teensTopics = new Array(
            "Entertainment: Cartoon & Animations",
            "Entertainment: Comics",
            "Science: Mathematics",
            "Entertainment: Video Games",
            "General Knowledge",
            "Animals",
            "Science: Gadgets",
            "Sports",
            "Entertainment: Board Games",
            "Vehicles",
            "Entertainment: Japanese Anime & Manga"
        );

        var childrenTopics = new Array(
            "Entertainment: Cartoon & Animations",
            "Entertainment: Comics",
            "Science: Mathematics",
            "Entertainment: Video Games",
            "General Knowledge",
            "Animals",
            "Science: Gadgets",
            "Science: Computers"
        );


        var adultsTopicsValues = new Array(32,29,19,15,9,27,30,21,16,28,31,26,22,24,18,11,12);
        var teensTopicsValues = new Array(32,29,19,15,9,27,30,21,16,28,31);
        var childrenTopicsValues = new Array(32,29,19,15,9,27,30,18)''
        if(userType === "child"){
            console.log(childrenTopics[i].charAt(0)+childrenTopics[i].charAt(1));
            for (var i=0; i < childrenTopics.length;++i){
                addOption(document.drop_list.topic_list, childrenTopics[i], childrenTopicsValues[i]);


            }
            console.log(userType);
        }else if(userType === "teen"){

            for (var i=0; i < teensTopics.length;++i){
                addOption(document.drop_list.topic_list, teensTopics[i], teensTopicsValues[i]);
            }
            console.log(userType);
        }else if(userType === "adults"){

            for (var i=0; i < adultsTopics.length;++i){
                addOption(document.drop_list.topic_list, adultsTopics[i], adultsTopicsValues[i]);
            }
            console.log(userType);
        }



    }
