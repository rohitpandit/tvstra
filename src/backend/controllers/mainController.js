function home(req, res){
    res.render('index');
}
function doctor(req, res){
    res.render('doctor');
}
function hospital(req, res){
    res.render('hospital');
}
function aboutUs(req, res){
    res.render('aboutUs');
}
function appointment(req, res){
    res.render('appointment');
}

function treatment(req, res){
    res.render('treatment');
}

function login(req, res){
    res.render('login');
}

function appointment(req, res){
    res.render('appointment');
}

function signup(req, res){
    res.render('signup');
}

function contactus(req, res){
    res.render('contactus');
}

function doctorProfile(req, res){
    res.render('doctorProfile');
}


module.exports = {
    home: home,
    doctor: doctor,
    hospital: hospital,
    aboutUs: aboutUs,
    appointment: appointment,
    treatment: treatment,
    login: login,
    appointment: appointment,
    signup: signup,
    contactus: contactus,
    doctorProfile: doctorProfile
}