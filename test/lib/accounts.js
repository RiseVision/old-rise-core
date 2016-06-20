"use strict";

var path = require("path");
var spawn = require("child_process").spawn;

// Requires and node configuration
var node = require("./../variables.js");

// Account info for password "sebastian" - 0 RISE amount
var Saccount = {
    "address": "12099044743111170367R",
    "publicKey" : "fbd20d4975e53916488791477dd38274c1b4ec23ad322a65adb171ec2ab6a0dc",
    "password" : "sebastian",
    "name" : "sebastian",
    "balance": 0
};

describe("POST /accounts/open", function () {

    it("Using valid passphrase: "+Saccount.password+". Should be ok",function (done) {
        node.api.post("/accounts/open")
            .set("Accept", "application/json")
            .send({
                secret: Saccount.password
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                node.expect(res.body).to.have.property("account").that.is.an("object");
                node.expect(res.body.account.address).to.equal(Saccount.address);
                node.expect(res.body.account.publicKey).to.equal(Saccount.publicKey);
                Saccount.balance = res.body.account.balance;
                done();
            });
    });

    it("Using empty json. Should fail",function (done) {
        node.api.post("/accounts/open")
            .set("Accept", "application/json")
            .send({
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key of account");
                done();
            });
    });

    it("Using empty passphrase. Should fail",function (done) {
        node.api.post("/accounts/open")
            .set("Accept", "application/json")
            .send({
                secret:""
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key of account");
                done();
            });
    });

    it("Using invalid json. Should fail",function (done) {
        node.api.post("/accounts/open")
            .set("Accept", "application/json")
            .send("{\"invalid\"}")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key of account");
                done();
            });
    });
});

describe("GET /accounts/getBalance", function () {

    it("Using valid params. Should be ok",function (done) {
        node.api.get("/accounts/getBalance?address=" + Saccount.address)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                node.expect(res.body).to.have.property("balance");
                node.expect(res.body.balance).to.equal(Saccount.balance);
                done();
            });
    });

    it("Using invalid address. Should fail",function (done) {
        node.api.get("/accounts/getBalance?address=thisIsNOTALiskAddress")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // expect(res.body.error).to.contain("Provide valid Rise address");
                done();
            });
    });

    it("Using no address. Should fail",function (done) {
        node.api.get("/accounts/getBalance")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide address in url");
                done();
            });
    });
});

describe("GET /accounts/getPublicKey", function () {

    it("Using valid address. Should be ok",function (done) {
        node.api.get("/accounts/getPublicKey?address=" + Saccount.address)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                node.expect(res.body).to.have.property("publicKey");
                node.expect(res.body.publicKey).to.equal(Saccount.publicKey);
                done();
            });
    });

    it("Using invalid address. Should fail",function (done) {
        node.api.get("/accounts/getPublicKey?address=thisIsNOTALiskAddress")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // expect(res.body.error).to.contain("Provide valid Rise address");
                done();
            });
    });

    it("Using no address. Should fail",function (done) {
        node.api.get("/accounts/getPublicKey?address=")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // expect(res.body.error).to.contain("Provide valid Rise address");
                done();
            });
    });

    it("Using valid params. Should be ok",function (done) {
        node.api.post("/accounts/generatePublicKey")
            .set("Accept", "application/json")
            .send({
                secret: Saccount.password
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                node.expect(res.body).to.have.property("publicKey");
                node.expect(res.body.publicKey).to.equal(Saccount.publicKey);
                done();
            });
    });
});

describe("POST /accounts/generatePublicKey", function() {

    it("Using empty passphrase. Should fail",function (done) {
        node.api.post("/accounts/generatePublicKey")
            .set("Accept", "application/json")
            .send({
                secret: ""
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key");
                done();
            });
    });

    it("Using no params. Should fail",function (done) {
        node.api.post("/accounts/generatePublicKey")
            .set("Accept", "application/json")
            .send({})
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key");
                done();
            });
    });

    it("Using invalid json. Should fail",function (done) {
        node.api.post("/accounts/generatePublicKey")
            .set("Accept", "application/json")
            .send("{\"invalid\"}")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide secret key");
                done();
            });
    });
});

describe("GET /accounts?address=", function() {

    it("Using valid address. Should be ok",function (done) {
        node.api.get("/accounts?address=" + Saccount.address)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                node.expect(res.body).to.have.property("account").that.is.an("object");
                node.expect(res.body.account.address).to.equal(Saccount.address);
                node.expect(res.body.account.publicKey).to.equal(Saccount.publicKey);
                node.expect(res.body.account.balance).to.equal(Saccount.balance);
                done();
            });
    });

    it("Using invalid address. Should fail",function (done) {
        node.api.get("/accounts?address=thisIsNOTAValidLiskAddress")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // expect(res.body.error).to.contain("Provide valid Rise address");
                done();
            });
    });

    it("Using empty address. Should fail",function (done) {
        node.api.get("/accounts?address=")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res){
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.false;
                node.expect(res.body).to.have.property("error");
                // node.expect(res.body.error).to.contain("Provide address in url");
                done();
            });
    });
});
