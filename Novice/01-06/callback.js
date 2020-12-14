const Tito = () => {
    console.log("fidelis");
};

const Kompi = () => {
    console.log("suatmono");
};

const call = (callback) => {
    console.log("memanggil");
    callback();
};

call(Tito);

call (() => {
    console.log("suatmono");
});