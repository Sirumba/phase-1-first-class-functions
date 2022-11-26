
const receivesAFunction = (spy) => {
    returnsANamedFunction();
    return spy();

};

const returnsANamedFunction = function() {
    return function Man () {
        return  function disA (){
            console.log ("badMan")
        };
    };
};


const returnsAnAnonymousFunction = () => {
    return function () { 
        console.log ("badTings");
    };
};





  