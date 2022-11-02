import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio Metro",
            artist: "RadioMetro",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://stream.oneplay.no/oslo128",
            active: true,
        },
        {
            name:"Spreeradio Livestream",
            artist: "SpreeradioLivestream",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://rtlberlin.streamabc.net/rtlb-spreeradiolive-mp3-128-6206893",
            active: false,
        },
        {
            name:"Oldiefans – Das Origina",
            artist: "OldiefansDasOrigina",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://server7.streamserver24.com:8080/proxy/stekonig?mp=/stream/1/",
            active: false,
        },
        {
            name:"Radio Windrush",
            artist: "RadioWindrush",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s30.myradiostream.com:29210/stream/1/",
            active: false,
        },
        {
            name:"TruckSim FM",
            artist: "TruckSimFM",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://live.trucksim.fm/",
            active: false,
        },
        {
            name:"he Mix Radio 80",
            artist: "heMixRadio80",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://tmr80s.radioca.st/stream/1/",
            active: false,
        },
        {
            name:"Los 40 Classic",
            artist: "Los 40 Classic",
            cover: "https://img.freepik.com/vector-gratis/fondo-onda-ecualizador-colorido_52683-33072.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://25553.live.streamtheworld.com/LOS40_CLASSIC_SC",
            active: false,
        },
        {
            name:"RFC Radio",
            artist: "RFCRadio",
            cover: "https://cdn-icons-png.flaticon.com/512/1251/1251671.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://rfcradio.radioca.st/rfcmp3",
            active: false,
        },
        {
            name:"Curtin FM",
            artist: "CurtinFM",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://usa7.fastcast4u.com/proxy/curtinfm?mp=/stream/1/",
            active: false,
        },
    ];
}

export default chillHop;


