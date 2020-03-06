function Television() {
    this.chanel = ["Vtv1", "Vtv2", "Vtv3", "HBO", "Cinemax", "iTV"];
    this.volumn = 0;
    this.channelIndex = 0;
    this.power = false;
    this.code = "tvsamsung";
    this.getVolumn = function () {
        return this.volumn;
    }
    this.setPower = function (power) {
        this.power = power;
    }
    this.getPower = function () {
        return this.power;
    }
    this.getChannel = function () {
        return this.chanel[this.channelIndex];
    }
    this.checkCode = function (code) {
        if (this.code === code) {
            return true;
        }
        return false;
    }
    this.firstDisplay = function () {
        document.getElementById("tvpower").value = this.getPower();
        document.getElementById("tvchannel").value = "";
        document.getElementById("tvvolumn").value = "";
    }
    this.showInfo = function () {
        document.getElementById("tvpower").value = this.getPower();
        document.getElementById("tvchannel").value = this.getChannel();
        document.getElementById("tvvolumn").value = this.getVolumn();
    }
}

function Remote() {
    this.code = "tvsamsung";
    this.powerButton = function (TV) {
        if (TV.checkCode(this.code)) {
            if (TV.getPower()) {
                TV.setPower(false);
                TV.firstDisplay();
            } else {
                TV.setPower(true);
                TV.showInfo();
            }
        }
    }
    this.changeChanelUp = function (TV) {
        if (TV.getPower()) {
            if (TV.channelIndex <5){
                TV.channelIndex++;
            } else {
                TV.channelIndex = 0;
            }
            TV.showInfo();
        }
    }
    this.changeChanelDown = function (TV) {
        if (TV.getPower()) {
            if (TV.channelIndex > 0){
                TV.channelIndex--;
            } else {
                TV.channelIndex = 5;
            }
            TV.showInfo();
        }

    }
    this.changeVolumnUp = function (TV) {
        if (TV.getPower()) {
            if (TV.getVolumn() <= 100) {
                TV.volumn++;
                TV.showInfo();
            }
        }
    }
    this.changeVolumnDown = function (TV) {
        if (TV.getPower()) {
            if (TV.getVolumn() > 0) {
                TV.volumn--;
            }
            TV.showInfo();
        }

    }
}

let television = new Television();
let remote = new Remote();
