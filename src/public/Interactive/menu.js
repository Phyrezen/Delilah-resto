var sum = document.getElementById("sumx");
var zeroCo0l = document.getElementById("zeroCo0l");
var numbers = document.getElementById("pedido");
var numx = document.getElementById("numx");
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var statuss = document.getElementById("statuss");
var maestro = document.getElementById("maestro");
var admin = document.getElementById("admin");
var add = document.getElementsByClassName("add");
var arry = document.getElementsByClassName("arry");
var confirmado = document.getElementsByClassName("confirmado");
var preparacion = document.getElementsByClassName("preparacion");
var camino = document.getElementsByClassName("camino");
var entregado = document.getElementsByClassName("entregado");
seleccion();
async function pedidos() {
    if (numx.innerText !== "hay pedido") {
        numbers.style.display = "none"
    } else {
        numbers.style.display = "";
        msg1.innerText = "Tenes un pedido hecho!";
        msg2.innerText = "Podes acceder a el apretando en pedidos";
        zeroCo0l.style.display = "none";
        for (let i = 0; i < add.length; i++) {
            add[i].style.display = "none";
        }
    }
}
pedidos();

async function permisos() {
    if (maestro.innerText === "akx24fyc78v_%&!") {
        admin.style.display = ""
    } else {
        admin.style.display = "none"
    }
}
permisos();

async function estados() {
    if (statuss.innerText === "Confirmado") {
        estado.style.backgroundImage = "url('../img/panel1.png')"
    } else if (statuss.innerText === "En preparacion") {
        estado.style.backgroundImage = "url('../img/panel2.png')"
    } else if (statuss.innerText === "En camino") {
        estado.style.backgroundImage = "url('../img/panel3.png')"
    } else {
        estado.style.backgroundImage = "url('../img/panel4.png')"
    }
};
estados();
async function platos() {
    if (sum.innerText !== "hay pedido") {
        zeroCo0l.style.display = "none"
        alert("No hay ningun plato elegido!")
    } else {
        zeroCo0l.style.display = "";
    }
}
platos();
window.onload = function() {
    const slider = new AutoSlider("#main-slider");
};
class AutoSlider {
    constructor(element) {
        this.el = document.querySelector(element);
        this.init();
        this.init2();
        this.init3();
    }

    init() {
        this.slides = this.el.querySelectorAll(".slide");
        this.menu = 0;
        this.timer = null;
        this.delay = 3000;
        this.action();
    }
    _slideTo(slide) {
        const currentSlide = this.slides[slide];
        currentSlide.style.opacity = 1;

        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            if (slide !== currentSlide) {
                slide.style.opacity = 0;
            }
        }
    }
    action() {
        this.timer = setInterval(function() {
            this.menu++;
            if (this.menu == this.slides.length) {
                this.menu = 0;
            }
            this._slideTo(this.menu);
        }.bind(this), this.delay);
    }
    init2() {
        this.slides2 = this.el.querySelectorAll(".slide2")
        this.menu = 0;
        this.timer = null;
        this.delay = 3000;
        this.action2();
    }
    _slideTo2(slide2) {
        const currentSlide2 = this.slides2[slide2];
        currentSlide2.style.opacity = 1;

        for (let i = 0; i < this.slides2.length; i++) {
            let slide2 = this.slides2[i];
            if (slide2 !== currentSlide2) {
                slide2.style.opacity = 0;
            }
        }
    }
    action2() {
        this.timer = setInterval(function() {
            this.menu++;
            if (this.menu == this.slides2.length) {
                this.menu = 0;
            }
            this._slideTo2(this.menu);
        }.bind(this), this.delay);
    }
    init3() {
        this.slides3 = this.el.querySelectorAll(".slide3")
        this.menu = 0;
        this.timer = null;
        this.delay = 3000;
        this.action3();
    }
    _slideTo3(slide3) {
        const currentSlide3 = this.slides3[slide3];
        currentSlide3.style.opacity = 1;

        for (let i = 0; i < this.slides3.length; i++) {
            let slide3 = this.slides3[i];
            if (slide3 !== currentSlide3) {
                slide3.style.opacity = 0;
            }
        }
    }
    action3() {
        this.timer = setInterval(function() {
            this.menu++;
            if (this.menu == this.slides3.length) {
                this.menu = 0;
            }
            this._slideTo3(this.menu);
        }.bind(this), this.delay);
    }
}


// async function seleccion() {
//     for (let i = 0; i < arry.length; i++) {
//         if (arry[0].textContent === "confirmado") {
//             preparacion[0].style.display = "none";
//             for (let i = 0; i < preparacion.length; i++) {
//                 preparacion[i].style.display = "none";
//             }
//         } else {
//             for (let i = 0; i < preparacion.length; i++) {
//                 preparacion[i].style.display = "";
//             }
//         }
//     }
// };
// seleccion();

async function seleccion() {
    if (arry[0].textContent === "Confirmado") {
        confirmado[0].style.color = "red";
    };
    if (arry[0].textContent === "En preparacion") {
        preparacion[0].style.color = "red";
    };
    if (arry[0].textContent === "En camino") {
        camino[0].style.color = "red";
    };
    if (arry[0].textContent === "Entregado") {
        entregado[0].style.color = "red";
    };
    if (arry[1].textContent === "confirmado") {
        confirmado[1].style.color = "red";
    };
    if (arry[1].textContent === "En preparacion") {
        preparacion[1].style.color = "red";
    };
    if (arry[1].textContent === "En camino") {
        camino[1].style.color = "red";
    };
    if (arry[1].textContent === "Entregado") {
        entregado[1].style.color = "red";
    };
    if (arry[2].textContent === "confirmado") {
        confirmado[2].style.color = "red";
    };
    if (arry[2].textContent === "En preparacion") {
        preparacion[2].style.color = "red";
    };
    if (arry[2].textContent === "En camino") {
        camino[2].style.color = "red";
    };
    if (arry[2].textContent === "Entregado") {
        entregado[2].style.color = "red";
    };
    if (arry[3].textContent === "confirmado") {
        confirmado[3].style.color = "red";
    };
    if (arry[3].textContent === "En preparacion") {
        preparacion[3].style.color = "red";
    };
    if (arry[3].textContent === "En camino") {
        camino[3].style.color = "red";
    };
    if (arry[3].textContent === "Entregado") {
        entregado[3].style.color = "red";
    };
    if (arry[4].textContent === "confirmado") {
        confirmado[4].style.color = "red";
    };
    if (arry[4].textContent === "En preparacion") {
        preparacion[4].style.color = "red";
    };
    if (arry[4].textContent === "En camino") {
        camino[4].style.color = "red";
    };
    if (arry[4].textContent === "Entregado") {
        entregado[4].style.color = "red";
    };
    if (arry[5].textContent === "confirmado") {
        confirmado[5].style.color = "red";
    };
    if (arry[5].textContent === "En preparacion") {
        preparacion[5].style.color = "red";
    };
    if (arry[5].textContent === "En camino") {
        camino[5].style.color = "red";
    };
    if (arry[5].textContent === "Entregado") {
        entregado[5].style.color = "red";
    };
}