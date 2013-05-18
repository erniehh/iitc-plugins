// ==UserScript==
// @id             iitc-plugin-wetterbericht-portals@dazz
// @name           iitc: wetterbericht-portals
// @version        0.1.4.3
// @namespace      https://github.com/breunigs/ingress-intel-total-conversion
// @updateURL      http://ingress.ernie-hh.de/iitc/wetterbericht-portals.user.js
// @downloadURL    http://ingress.ernie-hh.de/iitc/wetterbericht-portals.user.js
// @description    wetterbericht-portals
// @include        *://www.ingress.com/intel*
// @match          *://www.ingress.com/intel*
// ==/UserScript==

function wrapper() {
  // ensure plugin framework is there, even if iitc is not yet loaded
  if(typeof window.plugin !== 'function') window.plugin = function() {};


  // PLUGIN START ////////////////////////////////////////////////////////
  // use own namespace for plugin
  // wetterberichtportals can be multiple city files so let's prepare
  if(typeof window.plugin.wetterberichtportals !== 'function') {
    window.plugin.wetterberichtportals = function() {};
    window.plugin.wetterberichtportals.city = function() {};
  }

  // city start: BERLIN
  window.plugin.wetterberichtportals.city.berlin = function() {
    return {
      'areas': [ // select area(s) you want to see
        'ANH', 'CC', 'ESG', 'GK', 'GM', 'GRP', 'GS', 'KOE', 'LG', 'NK',
        'PDL', 'PKW', 'PP', 'THF', 'TP', 'SC', 'VFH', 'AVK',
      ],
      'ANH': {
        'portals': [
          '3c70c9111d0b4eb4806d57397271ce86.12', // Berlin- Anhalter Bahnhof im Sc
          '1c5f0221a76745eb9d9b7727047e4a7f.12', // Berlin - Anhalter Bahnhof Port
          'b33b0ddf9fc94e89a0993911a7cbac6d.12', // Berlin - Anhalter Bahnhof Port
          'aa2deb7b1fc249e1ab29e3dc845b8419.12', // Day and Night by Ludwig Brunow
          'cfd39fc3b71d41d782880e266c42f3f7.12', // Tempodrom by TF
          '5cd0e232476f4b45a69896c07d981169.12', // Berlin - Tempodrom
          '21aef2b4e5c640d78c8177b69ec62308.12', // Berlin
          'f0b3cb91460d4b96b01fca11ca17b3ce.12', // Berlin - Dachkonstruktion des
          'e026dcac4d7240aa8db2cf43f58cb9b1.12', // Berlin - Postgebäude
        ]
      },
      'CC': {
        'portals': [
          '8fbe5b0690ec41008a6ce9fd4ef384c0.12', // Checkpoint Charlie Site
          '315659248b104a98a8a21fdb7fb591ea.12', // Berlijn2
          'c0d96ad184334b1c961f7135404243b9.12', // Чекпойнт Чарли
          'dcdc183fedc142fe940ecfe40e77ae4c.12', // Berlin Checkpoint Charlie
          '59782084f1df4bad8350b9853fbd83ca.12', // "Berliner Mauer"
          'e1d813ca03394b93bb63a4b7c835ed42.12', // House Ball by Claes Oldenburg
          '329f1fa4188f48428daa8aa74e61e8ff.12', // Oldenburg/van Bruggen: Houseba
        ]
      },
      'PDL': {
        'portals': [
          'cb8f749054c8403f92d51afd3484cb25.12', // Airfild Memorial
          'b231c2c7aab048f29a9413ef77db6253.12', // die Luftbrücke
          '645fc1daea0043de8e244e8bc7fd629a.12', // Berlin Airlift Monument by Edu
          '4870a2296861446bbc1d0809146dd89b.12', // Tempelhof
          '3fe78a5b37b14687818d3ee535ff2d5e.12', // Luftbruecke monument
        ]
      },
      'GM': {
        'portals': [
          'ebdb40377ce84c4abd15c8ec25588cdb.12', // Französischer Dom - Statue
          'c5607f1ae88249aa9b8993f28e60770a.12', // Berlin
          '6c0431949e7443f9912ab48fd74cf843.12', // Berlin  , Alemania / Germany /
          'b465fa16e866480693bf9510787351d3.12', // Gendarmenmarkt
          '6dcb0eb304104cf6a713865a60800e5f.12', // Franzoesischer Dom Bronze Loew
          '517101d0cab04bcf94bb27e8d4bca0fb.12', // Gendarmenmarkt - Berlin
          '651a3fed64904ac29ee827a30fa52a8e.12', // Ein mahnender Blick
          '69e8edd045484ed289320310dd4bb637.12', // Französischer Dom met Konzerth
          'f711a8a3f6c9441fb22b540d6e65f891.12', // Konzerthaus Franzoesischer Dom
          '934051d8bdf440a4a6938c8f4a37b02f.12', // Konzerthaus Franzoesischer Dom
        ]
      },
      'ESG': {
        'portals': [
          '916585c8be7d4a43bdf11746566e0451.11', // USA Mural in Berlin
          '9950121dcf544ad1aec14df84dadec2d.11', // Up and away
          '76ac37bb353f423f98ce9de198520d01.12', // YAAM
          'd0f34d13703c49c098c69a5421146e29.12', // [Untitled]
          '15858f7f8b3c42d999cbc4ba1ae8adc8.11', // Art Wall
          'b72ffc2d6e374d54bce92e67b49551ce.12', // I love Berlin
          '7ef38009b29e4bed8c458e128f4ecbd9.11', // Schiller, Goethe, Einstein
          '087dcf1131e24fc5a8209e750deb95f9.12', // Best Buddies Friendship Bear b
          '2c411b4a2ee74acc9947b4c34e22871e.11', // O2World
          'a65de378051145af8d77b51cea5405e9.12', // Oberbaumbrücke, Berlín
          'cc91d3e024c2493ea820cfe36c3d3992.12', // Berlin, Deutschland
          'fc18346e97b647be9f8c0bc01aac9bb8.11', // Romero Britto
          'f163322efae9469e82bef8880a831606.12', // Берлинская стена. Фрагмент #1
          '799469b00a2440bab5a364dcb0cb7d3c.12', // East Side Gallery
          '6191146893da4733b71be0659f63b0c0.12', // East Side Gallery
          '0146161961f3477b9a7a24af1355e5a9.12', // An der East Side Gallery
          '8867178cb88042a7af4aee372767a12e.12', // BOA MISTURA_DIE UMMARMUNG (BER
          '996277e0448f4267b5c6ccd6a642a62a.12', // Berlin - East side gallery
          '4788465d4066479881bcb593e2d915cd.12', // statue of wrestling men
          '5617d5d5ea154b0da4215dee82cb0ceb.12', // schöne U-Bahn
          'f507ed3b0ebf41409d08998741849e1c.12', // Standbilder
          '0a9debf4c05e4b14b67cf92bf54e8287.12', // Dicker weißer Brocken
          '2e54af0f07aa4db49bdcd5a687fb9a33.12', // He and She lie in Berlin
        ]
      },
      'GRP': {
        'portals': [
          '1f4831bc995545348fede1c2f8d07ed2.12', // Topografía del Terror
          '8fade11e6d6249c0a7cb3271590c9371.12', // Muro de Berlin
          '9654344bcb054637b4e4899b03ea2c3e.12', // Die Welt Baloon by night
          'e722958e2c514d38a46a0c27ce7624ba.12', // Topographie des Terrors
          'c52ac80faaba46cb9620a84b1fd9f817.12', // Berliner Mauer
          '8a75adb11d9c4138958a5eb289a44060.12', // Baudenkmal Berliner Mauer
          'ecb6cb822f07466c80518fc2da01f488.12', // Mur de Berlin, Berlin, Allemag
          '21aef2b4e5c640d78c8177b69ec62308.12', // Berlin
        ]
      },
      'GS': {
        'portals': [
          'daae8fc89dda49faa10d67e15d92aaed.12', // Unterwegs in Richtung Großer S
          '06d5708f94fb4bc08276ed7abbfae488.12', // Berlin Victory Column (Siegess
          '55aa42bedf08467eae1ddf43bed36aee.12', // Berlin. The Victory Column.
          '11824af2ce4a4d638dafc82ccd7c7719.12', // Berlin. The Victory Column (Di
          'f019a18003e04615a8dc3f3ad7f4e964.12', // Siegessäule
          'bc6b85c6deef4031b132f77b34e8b1aa.12', // Siegessaule, Berlin, Germany
          '5b5cd6fdd4d14808adac4eaedd6b35cc.12', // Berliner Siegessaule, Berlin
          '4f87e02e2b214f61b5357570f9f08c30.12', // Berlīnes uzvaras kolonna ar eņ
          '45849ee924b4479ab567dbccd99f0e3a.12', // Берлин. "Золотая Эльза" на пло
          '6070dd9d9ffd40a2875237a435bac7b5.12', // Die Siegesgöttin von Berlin. T
          '35ba3f3d119f45a58a2bddb0e5af2677.12', // Die Touristen unter der Sieges
          'ccc9050a03ef458b9345a787081ea4b6.12', // Siegessäule Angel monument
          '395b10fe254c41aca1258f92a00ef474.12', // estatua ,  parque Tiergarten,
          'c8783a6366314d9fbd1dc5899021d185.12', // The Statue of Victoria
          'b1657194716d48f4b4a264a442733734.12', // Roon monument by Harro Magnuss
          'ff910284cc8d4538ac85815268684dff.12', // [Untitled]
          '2e58e59de4284868ae9876fda2bdee0e.12', // Колонна Победы (SIEGESSAULE),
          '0b679c97596b46e397af3af859f55c5b.12', // Siegessaul
          '37e440fd475e4697b1b5850027eccf1b.12', // Bismarck Monument
          '9a82bdd65db54ec8b84323cc29ef1300.12', // Berlin Victory Column (Siegess
          '4d2bb7b975d74d97af7af0c5a6406fd0.12', // Berlin
          'e3ac7ed33e3e4cf5b78b9ee7e105d980.12', // Tiergarten park
          '1894c6c2e27349919d6ddea1fad093e6.12', // [Untitled]
          'fa3e80eeebac475782c7702e34f11a6d.12', // Berlin - Friedensengel... sieh
          '7f995cf0e20c4ca08642ed6c20c6ae11.12', // Red Barons go Berlin, Siegessä
          '08807caca27244d0b49142953f93e97d.12', // Siegessäule
          'a348c0efc7f54ea0b0f02b0bc6979147.12', // Die Gold-Marie...
          '055a2c27dd364e848bf4ed8965bfb698.12', // Siegessäule - The Victory Colu
          'd5af8d7de1064084b93b40bb5a19b87e.12', // Siegesaule Berlin
          'd4206be87d6b4cb1b8b39536e8f1b06d.12', // Siegessäule bei Nacht
          '6c7bc364a6bd41b5b4d7e62a691b6d26.12', // Siegessäule
          'e5d5d56687a648369afa592832a99402.12', // Siegessäule - Abenddämmerung
          'ad8e323603eb4e799e0272dc7526a7d2.12', // Golden Elsa Berlin
          'd7213b86777a49b2b10b95ec54db5e81.12', // Victory Column
          '12f16e7176074b67b1f9f27f7a1091a9.12', // Nationaldenkmal des ersten deu
          '33e96ffff6464133907c22f7f8aa6480.12', // Berlin
          '704831cdfa8a4d83a76e1ef1db0243b0.12', // [Untitled]
          'cff7f47b1e2b4244b87928cb5a6e2cb6.12', // bismarck.BERLIN
          'f3011055f6584f4b83059532704d8c63.12', // The Victory Column
          'a58e75fab500440fb46b419fdbe545cd.12',  // Siegessäule
        ]
      },
      'TP': {
        'portals': [
          '866d70e70e4843f8a1d7ad4fcb5b2302.12', // Sowjetisches Ehrenmal - Trepto
          '5fe4d15fb2bc44cfbe1a5471eab1c885.12', // Soviet War Memorial, Treptower
          '1a80b7641e39408e8f54d6d7eace4894.12', // Sowjetisches Ehrenmall
          '99c13c4b32c94df696cc83dc2e1058f7.12', // Sowjetisches Ehrenmall
          '1f7ff3555db74af6a35b69f9d03c5ec9.12', // Sowjetisches Ehrenmall
          '53a14d00adfd4a6bbe939895cc7bf9fe.12', // Берлин. Трептов-парк. 04.2012.
          '4cd2eee6f5b14a1d80a56402f7a789c8.12', // Sowjetisches Ehrenmall
          '8ec098b330dc4b50ba39ed06c37e1206.12', // Sowjetisches Ehrenmal - Trepto
          'f35e1b84ae734fed8eaa80694027c184.12', // Soviet War Memorial, Treptower
          '3b8c79dc8a084f41a8f27e5c5c451db7.12', // Soviet War Memorial, Treptower
        ]
      },
      'PP': {
        'portals': [
          'fb485d2af0b54d6db636b0d30718a058.12', // Pferdekopf (Horsehead) by Hans
          '8c3d0917e2e34ee98660e4b37fb97ac4.12', // De San Martin
          'bcf752a3f3384da183d854a734a29685.12', // Berlin - St. Matthäuskirche
          'd02674ef8b2c47589605f46443c00876.12', // Têtes et Queue by Alexander Ca
          '26824e3f518a45b3a9c8d10d8ede43df.12', // Broken Obelisk by Barnett Newm
          '33fcbd09613145eea39b139179cef2e4.12', // Die Goldene Philharmonie...
          '21740b573dc448598f677a09d250500a.12', // Echo II by Bernhard Heiliger
          'c335a177385941019f55a532e4e102bc.12', // Matthäikirche...
          'b9554c9256094330ae36e8e4ad239594.12', // Berlin - Skulptur
          'ad38e18304c64f6ea61a8344dd7502c2.12', // St. Matthäuskirche seen from t
          '1191237191bd4cf39332cbba18c2b0ab.12', // Echo I by Bernhard Heiliger
          'a6fe290608de4da8ad60874c6f486ada.12', // Matthaïkirche
          '9d8af48751ca4f4e86eb426cb12547a2.12', // Broken Obelisk - Barnett Newma
          'e4e0060f11fc4066b73fe66db6b4783f.12', // Polis by Joannis Avramidis
          'ae1455a1d65746a2acc88ffd92b24a7c.12', // Aktion T4 memorial for the vic
          'b54ed6376f994c11b99a84e4de242e34.12', // New houses, Potsdammer Platz
          '78d18d0e944248e297e6115a8dab0017.12', // Berlin
          '8e1cbe818978493f804af7b787d35d2f.12', // Berlin Junction by Richard Ser
          '12d092049ef44c708f24e2cf67fc3ea0.12', // Potzdamer Platz
          '56cfb1d2cc594128b4a4415c0839bf23.12', // Berlin - Daimler Quartier (3)
          'ca27cef33ab84940a7b29349f074e708.12', // Sculpture Galileo by Mark di S
          '13816c41aa82487da49f9d226df0948e.12', // Sculpture Gelandet by Auke de
          '1e2a74ae3d7148718cb584819f26e0fe.12', // Haus Huth & sculpture Riding B
          '9d2f17b28be74f4d8f5cac1c950f1c20.12', // Galileo Skulptur am Theaterufe
          'a1a9004ac8a14b9e95fab1fdf135728a.12', // Potsdamer Platz  Lego
          'de9ef544d6524d50b24a3147f92a3ac8.12', // Potsdamer Platz - Station Metr
          'ab459f6c9c204a02956e257da221e89d.12', // Berlin
          '3dc2b08dbc1d45b3933ce1927a389a51.12', // Old in New, My Vision in the S
          '9fbed651ba5744709a331de700f82a68.12', // Berlin - Dachkonstruktion des
          '603ad31bbac44bac92363c8eb2281b66.12', // Bahntower
          '6946629834f34ea3b56235eeb9a39fa1.12', // Sony Center
          '4943d3b8690e41379a526e06873ebb13.12', // Sony Center
          '700d6cf96ba54aeca7b8528a7af38938.12', // Berlin, Potsdammmer Platz
          'b4dbbee2c9154dbe89734b2291722c2d.12', // Berlin, the view
          'dce4e070447b447dbff540d5cbfdaea3.12', // sony center
          '44c7aef460d845569e706e3737f3964e.12', // Sony Center by night
          '56701babf1af47549166740eb3136139.12', // Lego giraffe, Legoland Discove
          '62ceda9b36a44141a639b0473e1f1224.12', // 2010.12.04 - remnants of the B
          'd8b5a737f2c44b6e88ee8604010ac2d1.12', // Berlin - Potsdamer Platz - Ein
          'ad5058a65553454aa691f001cd89de03.12', // Berlin - Inge-Beisheim Square
          '8c0162a3f7964be0ae0f81946c637714.12', // Have a seat !
          '55e10ae4fc234f5495ecf157042e9d3d.12', // Berlin - Potsdamer Platz - Ein
        ]
      },
      'SC': {
        'portals': [
          'a65e4e12b7c940c785178c03927e800d.12', // Charlottenburg Palace
          '8ded59ce9a1542a38d8f6afdde81b4d1.12', // Belvedere Teahouse
          'a8ad392788334fe3a2dd53e8f8d1e1a8.12', // Statue
          'b970f43280594c94a3e145f49704f46d.12', // Amor
          '00ac61fcd76743f19083817f7e889c19.12', // Berlin, Schloss Charlottenburg
          '9b254598625e44ed8223391762ab5735.12', // Friedrich, erster König der Pr
          '4baa8cf7cc09437b9784d950799d507e.12', // Schloss Charlottenburg
          'af06148990f94da3a2ca049e688c6e15.12', // Berlin, Schlosspark Charlotten
          '02db0cb23d2647b1bc40c06b16bb377d.11', // Schloßgarten
          'a8729e89133e45c68f0f57845cbe9ab8.12', // Charlottenburg Castle Park
          '73ee14b6a67742818bfac511cbd58886.12', // Charlottenburg Statues
          'cf21a01c543c4e5bb8e512c471156bf8.12', // palacio Charlottenburg, Berlin
          '165b3f5bcdfd44348ba7ad96d497bade.12', // Berlin
          '719f3c8823524e05bdcce0c4d1384317.12', // Berlin, Schlosspark Charlotten
          '9ca91305b4c44ea1b8a10eb2bb468416.12', // Charlottenburg palace garden
          'b2a3d640ffd248c192eb9f3557ab3bde.12', // Park in summer
          '90593828a7b641aeb71fab162df88078.12', // Berlin, monument
          'c560fda698664e1482d84a2f35a8dab0.12', // Schloss Charlottenburg-Hochzei
          '343cc878da464f5eb4860bae2d1b8b29.12', // The Neon Ride
          'dfee19044106456db74a2fc248e8c910.12', // Berlin Charlottenburg gate
          'e495b716789d464fa2973e0a085ae9d2.12', // Charlottenburg Palace
          '7a6cccc6c800427daccee2c0ba5f3b90.12', // Tänzerin
          '9ed267007d0648c6b62ac078ac544745.11', // Feuermelder am Schloß Charlott
          '569bb5ec7aae4178a7b121132af5e8a5.12', // Charlottenburg Palace
          '00b567c4687e4da29298a6ec539f3f81.11', // Wall Art
          '2e6e8af1c61e41218cf759c39ec5849a.12', // Victoria-Säule im Schlosspark
          '2b9f7d209c2f4c05a8f411face109758.12', // Schloss - Charlottenburg - Sta
          '5316725805304e98935f273c58c41ae9.12', // Charlottenburg Palace
        ]
      },
      'LG': {
        'portals': [
          'c83b9f052f294351b031c596181be1dd.12', // Über die Schulter geschaut
          '5fdbab053aab4153a87dd3ce6ecf4281.12', // BATHER IN SPREE RIVER  (GERMAN
          '31972b5813c74e42bd5adff7889a6027.12', // Statues on River Spree Bank, B
          '2100908778654e09999748ca985f97d6.12', // Berlin    -Kämpfende Amazone a
          'e064cabb312645b790390ce55115c07d.12', // Drei Mädchen und ein Knabe
          'cb09f7c9cc98457f9be7e1554a20bab5.12', // Der Speer
          '9e1365f27d4e40c586f6ee23d4f19e58.12', // Isla de los Museos  - BERLIN ,
          'fb2d17f5593146f4ac3ea207bb3fcabe.12', // The Berliner Dom
          '9e3fc6efabd44bdab82315b8a80f3a5d.11', // statue of a marble woman
          '58e536f9d12047c0b4ea43d7922af46a.11', // Berlinner Dom
          '97a074b12f334cada6390ad9b2d81480.12', // Blick vom Dom zum Fernsehturm
          '94e799e32a414ddaae6f2c6872d58132.12', // Berlin
          'c1d3ee5ffc5c46bc812f3a0ddd954d12.12', // Berlin - Friedrichswerdersche
          '233e35b4057d438b927ab573f1199dc7.12', // The Old Museum
          '505e13ef67e044e2a914d2b4792cd3c6.12', // Fighting Amazon by August Kiss
          'ff4c0140667a46e2b2e084fe7546073a.12', // Statue at Altes Museum
          '39c7d2b3b5bc4bb29af438f6f9fb0301.12', // Attaque sur la Fernsehturm
          'e3b469b0139c49acbb9aa29f85533ef9.12', // Berlin
          'b33cb388f2634e459d373868075071de.12', // Gallienus, altes museum
          '7194a6fcb5134e7ebc8930d4c9379a79.12', // Horse Tamer by Christian Fried
          'f408eb2df7614728aadf72f172d47c78.12', // Schlossbrücke: Nike und der Kr
          '24471619448743b4ac75ac0a7098a620.12', // Bridge near German Historical
          '131df4fc4bba4883a9dbff3ecac55c11.12', // Berlin .- Alemania / Germany /
          'bf569a42f8394025a60cf8bb63c80c1e.12', // [Untitled]
          '03a32630fc3449959c84bbcdb7db3c52.12', // Bogenspannerin
          '4ab19f893d384fcfa7a3061b0dfacf89.12', // [Untitled]
          'c2718c7ce2774d1f98eeefa7a71c317c.12', // Pegasus von der Muse gelabt by
          '660b0c355f9649c781d6cc9cd8a3ec8f.11', // Humboldt Box
          '8c02734b2b014b07b33c4cf4b7b34c56.12', // Pegasus von der Grazie gebändi
          '492ae41fa0ea409ea06165e0fc388a46.12', // Alte Nationalgalerie
          '5e331bf2e5a44e44b2999f9c1db346c3.12', // Löwe (Lion) by August Gaul, Ko
          'e0ae87c10fc4410aadbe0a6e93c08167.12', // Neues Museum
          '5a7f484b9c934b67b257dccbf497ad20.12', // Amazing Amazon II
          '61965d06a95e45fa895f271e22e54f34.12', // In den Lüften
          'c24fa04860594d2bbba8aaae0800fe45.12', // Alte Nationalgalerie, Berlin,
          '4af172b1190e4daaad933e94a5b4e8db.12', // Altar de Pergamo
          'edb86f61a05a4fc6a85022883e5ac335.12', // Isla de los Museos, BERLIN , A
          'feaafea3fc7a443d85a038a6e52c3767.12', // Pergamon Museum Berlin - Perga
          'fa1cd646bc134e178d8d92e3f8516897.12', // Scholle auf dem Trockenen (Pla
          'e5c81e92e08e4b3bb5cf33eac4ca9a0e.12', // Fernsehturm, Berlin, Deutschla
          'bf41cd7aae37416a9a2bdf46b44d7394.12', // Neues Museum, Berlin, Deutschl
          '49cbfcddbbe64c7ab2d3c5f5ab9e420c.12', // Gerettet (Rescued) by Adolf Br
          '02fc08483008435f84aceabd3fbc6042.12', // Alte nationalgalerie de Berlin
          'edb488dee9884e5fbb5f682868e9d054.12', // Centaur and Nymph by Reinhold
        ]
      },
      'GK': {
        'portals': [
          'fae45d8f0db247a68de49e751cc7f215.12', // Nächtliche Begegnungen: Der "J
          '4ae0b84305c748ca9ffe0566c5d5ba40.12', // Nächtliche Begegnungen: Alexan
          'f3bb90b3bb0142f0b729b40542275f08.12', // CK Tauentzienstrasse mit Metal
          'e053d01647f94e96b24bd15b0dd3c068.12', // Eingang Zoologischer Garten (H
          '2fa4cf72086f49fab815dd997f589dbe.11', // Feuermelder
          'cd67b615c05a4308b24fa0c1b68c6e47.12', // Breitscheidplatz by night and
          'aed441e4eaa74dfc8a114669ccbf2dbc.12', // "Уличный музыкант" /  "Street
          'e00bef8a76bd4744bfbe837e7d990014.12', // Tauentzienstrasse mit Kaiser W
          '02ac1b172d184f3689182b617b76c802.12', // .BERLIN
          '281f8279a8a74593ac7d5b39a667c97c.12', // Берлин. Тауентциенштрассе (Tau
          'eca87d7643b5470db1beae6f067b7b0d.12', // BERLIN, Alemania, Germany , De
          'f012518824e64960833b8e02f5d5a9a1.11', // Triariis Bello Occisis
          '572adaee9c914b5a83ec4cd26950cb1c.12', // Wittenbergplatz at sunset
          '02bfec7d058d49ec9e031706403fe485.11', // Public Sculpture, Wittenbergpl
          '2236f31c3db44d5c9b04a7ad68526325.12', // CK Brunnen am Wittenbergplatz
          '2fa4cf72086f49fab815dd997f589dbe.11', // Feuermelder
          'cd67b615c05a4308b24fa0c1b68c6e47.12', // Breitscheidplatz by night and
          '281f8279a8a74593ac7d5b39a667c97c.12', // Берлин. Тауентциенштрассе (Tau
          '7eef8522569047738ddabf6f766a2d78.12', // Eingang Tiergarten in Berlin
          '0f065e145655427ea9af39b2d440e850.11', // Berlin Zoo Trainstation
          'ec5df400c7e2406da78a6832c9bdd631.12', // Berlijn3
          '38f888a7346940deb2255f983f8dc9b4.12', // Brunnen Europacenter
          '097a8f9e42d6439ea8afc723abc24213.12', // Kaiser-Wilhelm-Gedächtnis-Kirc
          'aed441e4eaa74dfc8a114669ccbf2dbc.12', // "Уличный музыкант" /  "Street
          'f1046ef35c2b402a84d9a5de93ed84d6.12', // [Untitled]
          '27a4b3a778204ad396a8411ebdbcc59d.12', // Das Urteil des Paris (Judgemen
          '252e166d1aca4d2b83e6e49e8b34e9f1.12', // Kaiser Wilhelm Gedächtniskirch
          'e7d19dce1b78456fa3835e13c6eb1753.12', // berlin kudam
          'ae85ee9a5402432d909e23fb2da0964d.12', // Kaiser Wilhelms Gedänkskirche
          'd4a882075476456c93e239ee08babc38.12', // Kleiner Brunnen
          'a8384bf8d2d940d495073b3ec1191218.12', // Фонтан у ТЦ "Европа" / The fou
          '2017797993de4dc99c00884c254fadb6.12', // Pendelobelisk (Pendulum-Obelis
          '0db28b149e334b33afdf908ca12e2401.12', // Berlin Gedächtniskirche
          '4d6301d46ad94c1292e27bd1a9bb8d20.12', // Memory's Church at twilight
          'e00bef8a76bd4744bfbe837e7d990014.12', // Tauentzienstrasse mit Kaiser W
          '02ac1b172d184f3689182b617b76c802.12', // .BERLIN
          '06ea42fb05ef4a95a74f9345c78d0a31.12', // Gedächtnis Kirche
          '4f8b8bb66a0849e685d141c525361122.12', // Kaiser Wilhelm Memorial Church
          'abf1bcaebd49498b9c855ed062e4b0c9.12', // Das Urteil des Paris (Judgemen
          'ac8626e01da14b51be0d2d1bbdea2a38.12', // Buddy Bear Quadriga by Marina
          '2ac4c2d1c88043988b7b29739592e0d0.12', // Nachtaufnahme von der Kaiser-W
          '2e07badcd2204e11b631ecec387f0fc8.12', // Thora-Rolle (Torah-Scroll) by
          'cb0683245cf24a9c87df81d954f288fb.12', // Der gestürzte Krieger (The Fal
          'e73defb268b0451cbed6cfa7bed663ac.12', // BERLIN, Alemania, Germany , De
          '2e07badcd2204e11b631ecec387f0fc8.12', // Thora-Rolle (Torah-Scroll) by
          '563e7213c4c34852bade9a5529b64618.12', // United States' United Buddy Be
          '657ab49d0742438ba6e6c31b544f5462.12', // Das Innere Auge by Jacqueline
          'b0be3407f50b4ff7a65479f5a727483b.12', // United Buddy Bears, Knesebecks
          'c7cbe875033f4abf84eb0ca7ca10b758.12', // Pyramide by Josef Erben, Berli
          '5366e87415b0477f82822c41391c7403.12', // Pyramide by Josef Erben, Kurfü
          'cb0683245cf24a9c87df81d954f288fb.12', // Der gestürzte Krieger (The Fal
          'e73defb268b0451cbed6cfa7bed663ac.12', // BERLIN, Alemania, Germany , De
          '7b09f4211ee240f88378f3ebb10a4476.12', // Asymmetrische Vase by Gerhard
        ]
      },
      'THF': {
        'portals': [
          '3cab613d13df45a2aa364c9618a78743.11', // Themenspielplatz "Eisenbahn" im Bo
          '82fa475af02f44c3bed1cc8728458096.11', // Rotationsskulptur im Park
          'a1b76923b0dc4925843bed7bccd5c98b.11', // Schultze-Seehof-Brunnen 2
          'e10c32d4e9a94a278ba75ad1f1d0b984.11', // ein versteckter Hinweis auf da
          '5b6983a689204d15be7527faa54c9edf.11', // Tempelhofer Hafen
          '878f956a1f7a4c9b97ad67c7d5805e40.11', // Betonskulptur vor dem Rathaus
          'b3982455154e43f5af345f8a3b1adb00.11', // Tempelhofer Hafen Haupteingang
          'a8b905ab396b4e928e53f74ad8235215.11', // Ullsteinhaus
          '3c1422e237a1486b966c53eaf977325e.11', // Der Fischersjunge mit dem Okto
          '3ec65869bc344c2197ebc77f0371d86f.11', // Monument am Wenckebach Kranken
          '60d7b82829fe44dbb37a38f775e468fd.12', // Ullsteinhaus
          '28378bda5675462c8d9633df2377d4ce.11', // "Laokoon III", Volkmar Hause, 1982
          '60749ff2f2a348c3b6c3185706375667.11', // Postamt Tempelhofer Damm 171
          '6bb310cf1ecf4b4485e1efd0beeee823.11', // S-Bhf. Tempelhof
          '064c9b022f8f41a0b9d44a5491bbd0ee.12', // Dorfkirche
          '60ad560fcd4740d7a527945c48af0042.11', // Looking at the Mall Tempelhof
          'c39e8bcbc5f043b291521df1a9deae02.11', // Stadtbücherei Eva-Maria
        ]
      },
      'NK': {
        'portals': [
          '444a5b926ffb40ea834949996ef0942e.11', // Green Dungeon
          '9401675d232b4eb6bb7942230f6161de.11', // Friedhof Eingang Magdalenenfri
          'fba9b6ab87da4256979bac9aa702643d.11', // Blue Sphere
          'e7eb16bfe2fa40538f4ab51f43e2198e.11', // Monument in Richardplatz
          'c945073ea3e947cca2aef068e962c039.11', // Magdalenenkirche
          '4fcfef5a15da4748ba70b576e7935279.11', // Friedhof Magdalena
          'd7919bf7bb48419194c22880fde5446a.11', // Wandbild Flughafenstraße
          '34b061d931e04d0197a6d5f13ce2d2ad.11', // Wandgemalde
          '6b344bb23a514998bf23e3d724fc77ba.11', // graffiti in Neukölln
          '3e9d96f2425846ea844ff7c7f27bb1ce.11', // Kirche in Rixdorf
          '00a411c3cc084fe3aba26b5ed4429409.11', // Herzbergstrasse wandbild
          '465f090aa1634b4bb91089d786958783.11', // S Bahnhof Neukölln
          '5cfe7e4fca3f4b29a2c1c0807de79f80.11', // Richardplatz Kings & Queens
          '7a09948c1ffc40b1a9cd15d20563916d.11', // Richardplatz Firepost
          '023b544635e44458b7fae093e403413a.11', // Thiemannstrasse Portal mit Dac
          'c1597a643b684481a8dcd870ee87d730.11', // S Neukölln
          '99bbd3707e28441592142b79936a1fcd.11', // Richardplatz Imbiss
          'e8f1aa4be9884c67888d45955e9ddb65.11', // Rathaus Neukölln
          '8934c33249784f7fa995be112e2d8178.12', // HIMO
          'd0b3efd291b74a02b00d56a70a66beb1.11', // Rütlischule
          '52b0ff9b761f492db44af5d25f986e5b.11', // Hermannplatz
          'ec528e1ac8964fb3a06e90c4981a3b7c.11', // Hermannplatz
          'db14f21e70e547e982296d46a01764a0.11', // Hermannplatz Statue
        ]
      },
      'KOE': {
        'portals': [
          '3b1ed3cccc6d47bb8b0a22397f5159fb.11', // St. Laurentius
          '4fbe33c4c3934de7996bc2a153e643f9.11', // Goettsche 68
          '2aeb07d6a78349aea8404add001ac315.11', // Schaukel
          '532f4767d4124320a1e0a828dfe5ccb4.11', // Panther
          'af759cb8a7564ff4b6e7b613aa1e5b82.12', // Rathaus Köpenick
          'ad2fb130de604dfca59ae694295af59d.11', // Koepenick Modell
          '383e1f54874a49a793b41a0e99e16df1.11', // Spaceballs
          'a6cd4167344845b9a6e62b1c90c156ba.12', // [Untitled]
          '8f20a3ea40ea461b81137692491525ea.11', // Pferd Auf Dem Schlossplatz
          'e41c17e9b5074fe59c21db6ed0f905b1.11', // Schloss Köpenick
          'bfa25bec4a204c3c987d468190970eb8.11', // Hauptmann v. Koepenick
        ]
      },
      'PKW': {
        'portals': [
          'ee33f78973cb4c559471a6398c241a91.11', // Breite Strasse Cage Sculpture
          '9c6a5c9389c441d4ab7094b60086ce61.11', // Wasserpumpe Schlosspark
          'deb2c5f334e64c7fa5a1e42353d6f301.11', // Drei Frauen an der Panke
          'cb23a09d829543e5bd0b87b572f2d455.11', // Skulptur am Schloßpark
          'd01286ba1b7740248329226e07fe4579.11', // Theo Balden, Mutter Und Kind,
          'ed531495a3a14f64ba3ae38e9d9a2d4a.12', // Carl von Ossietzky
          '4225fd1b6751400f93be9d9565948d4a.11', // Ev. Kirche Alt-Pankow
          '8447621d7d7c4666b792b5230f6638c2.12', // Springbrunnen
          'f81d0e8ab468452f984e8ea5852df515.11', // Holzskulptur
          'd8db5ff5b9e54374a532b066000b4a89.11', // Eingang Bleichröderpark
          '9a0f82bf97c147418d5a387288032513.11', // Skulptur Bleichröderpark
          '992c628018a24e4f81657cb91608ef4a.11', // Berlin Wall, Pankow
          'e85a14a278d945e38606a55fece0a483.11', // Der Steinehändler
          'c00d82d7cf864a6fab030a9c2425a3d4.11', // Mosaik Grunowstraße
          '59727d5d0aec4b88ad625ccee1980935.11', // Pankow Facade
          '2873af92411640cdb0beeee116d9ff7d.11', // S+U Bahnhof Pankow
        ]
      },
      'VFH': {
        'portals': [
          '9551f8376dfc49d6898345735d1d929c.11', // FridericusRex
          'c09fbb772c2a4b5985d28066b88491d5.12', // Märchenbrunnen im Volkspark Fr
          '85957cbaf30349998636e6ef60dac45d.12', // Brüderchen und Schwesterchen -
          'fb2e2d78aaf74615a292166b322d13cb.12', // Gedenkstatte der Deutschen Int
          'cd5dde3654694fca99c278b2a33f78b3.12', // Aschenputtel - Märchenbrunnen
          'd7b2f7e2d16d4deb9ce58cc991621315.11', // Pavillon
          'ed32e054cbd64a2794ac0ae950adeebe.11', // Steinmann
          '2df7589c11524e879b5f03ba98bc359c.11', // nakedwitch
          '796704ef6fff40e9abcb4adee9b19932.11', // Steinrobbe
          '772607ecfd654a30bbe7f8503baa0dec.11', // Steinpinguin
          '675e8163cac044fc9e8450178cc5d829.11', // Deutsch Polnisches Denkmal
          'c6592dd52f7a476587b07a2452d11b78.11', // Japanische Glocke
          '65b2f1c2b59f4ef4aeb565f796453273.11', // Base Station
          '26e0183afd43401ba0a157b92b582e14.11', // SEZ Berlin
        ]
      },
      'RRD': {
        'portals': [
          '77674fccee924d0d94dd2a230a29a342.11', // Fischbrunnen
          '2041a1a836734aa583397deb92dde04f.11', // Rathaus bei Nacht
          '63e3e886f2754aae96d84e86723962be.11', // Alter Feuermelder
          '7e6b27805c9c4809bab1772a455a8d59.11', // Mahnmal Gegen Gewalt
          '73036fbecd0d4ff290eb54ba2413e82c.11', // Rathaus Reinickendorf
          'a7a44d7fbcb4461da7c807aa88153225.11' // Dorfkirche Alt-Wittenau
        ]
      },
      'AVK': {
        'portals': [
          'dd4689f6d9624055bce2f17d8c1483b4.11', // Vier Heilige Schwestern
          '9993563ede9845168a82bf01a1df5718.11', // Menschen und Gepäck
          '02be108a638c4fe0bc20d4192c938428.11', // Auguste Viktoria Klinik
          '93257a77bfb142b4b81a296352b524d2.11', // Thüster Nautiliden
          'acb70f415f2348b58b3484a85560dcdd.11', // Rotation Sculpture
          'b4ac0a2e705e4a2c831a876ba16c33de.11', // Mädchen von Yukatan
          '6fac895bd55e49cc948fef5351e7169d.11', // Taschenpyramide
          'c86bd275e0fe4d2ba23b56baa53756d5.11', // Berlin Bear
        ]
      }
//      '': {
//        'portals': [
//
//        ]
//      },
    };
  };
  // city start: Hamburg
  window.plugin.wetterberichtportals.city.hamburg = function() {
    return {
      'areas': [ // select area(s) you want to see
        'PDR', 'MBA', 'PuB', 'STP', 'MIC', 'NIK', 'DTP','TRU','FAR','OHL'
      ],
      'STP': {
        'portals': [
  		'49bafd2cf1c849be967969450995d1e2.12', // Panorama - Planet.4
			'b7e74a7e877f45eeb1f7ade8f99e8b26.12', // Turnende
			'06bbb97d6e8c4f95b83ec59ff93a25e8.12', // Stadtpark: Planetarium im ehem
			'02868528a747484881a8cba8ea94f575.12', // Badende
			'474f16a2ed334219bb25d0ef78e2f3fb.12', // Opferschale
			'964c67b4ccad43d5bfc0b77b9fc15fb4.11', // Strange Thing in Stadtpark
			'f3e078722ac84153b03e150e9524e1a8.11', // Seelöwin Planschbecken Stadtpa
			'b9098ca9e91d44e5bb5e2142c9de575a.11', // Strange Wipps on Stadpark
			'0391889c3dc1441491ae17442625f6f8.12', // Im Stadtpark: Kind
			'7e080d3eec4c451a8ffd24adc916b5ba.11', // Der Bär
			'5002eac9192247129870569986674f90.12', // Stadtpark, Erfrischung- nicht 
			'd2df470259a14ba6b9d0c62a6bfefe63.12', // Im Stadtpark: Frau
			'58da3c10caa5489c8cb043adb321d963.12', // Jagende
			'd3fc400edb0d46c1a4395745b0835da0.12', // Sommersonntag am Stadtparksee
			'fcc1d1439f7b45e0b8067208273a2f74.11', // Braunbär im ost.- Stadtpark
			'243035f2763f4cf8b38088f28407d3af.11', // Springbrunnen im Osten des Stadtpark's
			'628adddd6b7c4b6a8d8c77a376bbec97.12', // Die Deichstraßenhäuser als Rel
			'384e039dad86459788d12feb6ff43ef4.12', // Wasser-Zentaurin (?)   oder Ro
			'ee2cefed66ec41cc8f3aaeb5880ff088.12', // Tanzende Mädchen
			'edca2a5f64d5425c896a9bf9bd6fac82.12', // Eisbär
			'3f82b550aacf480fad38de3ea90a0ff4.12', // Stadtpark, Landhaus Walter (Re
			'f3395f75958548e0b2d3a366a95b0a55.12', // "Diana mit Hunden",  Bronzepla
			'483f28db44504658a1d8c69d27d6a389.11', // Alte Wöhr
			'9f96bcf27dfd414cbc3e564ce724822c.11', // Sitzender Affe
			'9bb9a7a16cb1474bbe2d3cac233fc10f.11', // Raubkatze am Stadtpark
			'3ccd2c1437bd49d28583c68cddf8ed92.11', // Dem Bundestrainer
			'483f28db44504658a1d8c69d27d6a389.11', // Alte Wöhr
			'4b8230c6737b4358b40dc6fbfee2a65c.16', // Warten auf Herrchen
			'1a5acb017d214cec9be04d6cdab868e3.16'  // Steinerner Wegweiser
		   ]
      },
      'PDR': {
        'portals': [
			'e595d7bcaed24517abc08b610e77c817.12', // Fischerbrunnen Altona
			'67aafa5d3acd4059b3719004bd6a26bc.12', // Platz der Republik/ Altona mit
			'429d2b1adcf048f7901238f5e2449d13.12', // Altonaer Rathaus mit Reitersta
			'66abc0906d1647c29065dd2557ae2ab6.12', // Altona Rathaus
			'f40722463b76480087e1f89ee1f037b5.12', // Reiterstandbild Wilhelms l. vo
			'c135881842f24a0bb4fed1e6b79ab028.12', // Vor dem Altonaer Rathaus, Reit
			'70111fb1a3354a7ca59363131470434f.16', // Altonaer Theater
			'3d3bc160a04d409ab0393a2052c5d564.11'  // Altonaischer Schmuckplatz
		   ]
      },
      'MBA': {
      	'portals': [
			'436d5d6ab3654a6f9b0f0e6c385439fe.11', // Altonaer Spar- und Bauverein
			'4485a732f2284da4a96aaf922be20be5.11', // Gedenkstein
			'c5ed354ca8ce44d194d134eb9e7960b7.11', // Hamburg Statue
			'bb1c78ad5f7148f9aeced8bf0379dc86.11', // Wandskulptur
			'43c18d7aa5764b23992b2aa614615f21.11', // Turmhaus
			'10a67d70402b4ac4947ef6938dc6a0d3.11', // Gymnasium Allee Relief
			'bae8a1275dcf4c1ab1dda53fe5155675.11',  // Den Nicht Heimkehrenden
			'55766dbbb4fd4e7c82df5ed77566311c.11', // Luftmessnetz Station
			'890aee393a8f4da3bf1bf2891c7517d8.11', // Amtsgericht Altona
			'5b5d27dfc41142458bfd8b636e7e75b1.11', // Eckhaus
			'a6e13cabcaa24d598e50440d10a8a54e.11', // Erbaut 1958
			'55a590b5626543868740ee51f184c392.11', // Ehem. allg. Krankenhaus Altona
			'b89f60aca13d4550ba8e77a97c6d9f21.11', // Kirche der Stille
			'f017e7e2091f4762946063b57224a1f7.11', // Frauenverein Altona
			'7709e886fe6244669698bfec31bea45e.11'  // Helenenstift			
		   ] 
      },
      'MIC': {
        'portals': [
			'9acc011b213041aeb7335c0929a08089.12', // St. Michaelis Kirche
			'b6faf9e6e18640b3accf2b9669195223.12', // St. Michaelis
			'ebb7012088164e03868d931cdaebf576.12', // Hamburger Michel
			'f710f13e3e2144aeb2c61d8e73f03c84.12', // Michel
			'acc8aed7f81849e7b251313234d0a40f.12', // Hamburg Michaeliskirche 1
			'75bc6be5ad854f8fab6c994bc95e026e.12', // St. Michaelis church
			'2f0fe10b25614abf8c88fa763aeed335.12', // St. Michael am Michel
			'183801a208a1470b95aa979a93a1fa52.12', // St. Michaelis Kirche
			'29dec43d761849ef873bb73ced1faf68.12', // St. Michaelis Church - Hamburg
			'1a61ccfd821640efb8710a3593f25384.11', // Spendentafeln
			'cde807fe051341d0b0a47561a2834358.11', // Joh. Heinrich Burchard
			'067a1c5b846a48cfa9a7efee5b08a2fa.11'  // Sonnin
		]  
      },
      'NIK': {
		'portals': [
			'f24d527f5d524f40bfe900ae7373dc6a.12', // Denkmal vor der St. Nikolai Ki
			'107d2454bc9a48eab3e11db2d730a42f.12', // St. Nilolai
			'e6472e55230349d7aa7e98ed9bf1d575.12', // Süd-Ostblick vom Turm der St.N
			'13600440957f47d78969c67d98fcca7f.12', // St Nikolai
			'9a2f18d7ae73495284695edbafb1a354.12', // Hamburg St. Nikolaiturm
			'd10f285e73aa46a3bf3c621f43f8859b.12', // hamburg - sankt nikolaikirche 
			'd8a779baed104692820154880b09512e.12', // Statuen berühmter Preussen am 
			'45e0a2b1e4684c4b9ba46ceb8b302bfd.11', // Adolf III, Graf von Schauenburg
			'bf798f93918d47458c1dd7e4f41d19af.12', // St. Ansgar, Erzbischof von Ham
			'2f3612f3a2544416a0ecdd89bee99a10.12'  // Nikolaikirche
          ]
      },
      'DTP': {
		'portals': [
			'f914c50d72954b8cab30793b912f5047.12', // Cityhafen15
			'd5508c5f207a47a2b238885b86839cba.12', // Cityhafen05
			'3242a370ab544723b820f94e4ce526ad.12', // Deichtorplatz
			'b77cdeb2c43848fb97838d412448ae4d.12', // Deichtorplatz, Ballon und Meta
			'9b7fb9e466444fbaab750f47e2aad36a.12', // Art Museum
			'ff6190024ff1494f99b143ffe460ec47.12'  // Deichtorplatz
		]           
      },
      'TRU': {
      	'portals': [
		'e4ad74a12dfd43ed827057b5d4ecf097.11', // Train Station, Barmbek, Hambur
		'ff53b8c9c4a040b59e982392fa577253.11', // Dampfspeicherlok
		'736545f71b534ede8ec4a40210d90f8c.11', // Peggys Schwester
		'9edd4457bc61463e8c800165fdc484e4.12', // 2005 Hamburg
		'19b2c7a426764f178329038fd89f4245.12', // Barmbek: Museum der Arbeit
		'7d75feb757304397864d6373682692b3.12', // Trude
		'3256c41eda744ef6916f84153414ff6a.12', // HH-Barmbek, Museum der Arbeit 
		'513f7717b27f401ea7face4b6901e855.11', // Die Träumende / The Dreaming W
		'80447809d1624d3d9a09899cd9fbf783.11', // Blumenmädchen am Osterbekweg
		'6cd3a1059a4d4c0dae8b450b2b5b7027.11',  // Graffiti on Food Truck, Flachsland
		'164a5a5968ad4b4b969b6ca4b203f1fa.11'  // Hamburg auf dem Weg zur Tiefgarage
		] 
      },
      'FAR': {
      	'portals': [
		'e8fbc6fbb2794bf1a548b2063c17e191.11', // Ev.-Luth. Kirche Farmsen
		'11aa9190304c4e01bc42ffc9204ddf81.11', // U Bahn Farmsen
		'440bc7f6717549bfacd7c899d1b73b55.11', // Horst Janssen Relief
		'42d17655876249c3869f3b86bb638a67.11', // Katholische Kirche Heilig-Geis
		'51a631bfff264de186e9c1538f55685a.11', // Bücherhalle Farmsen
		'e6d7a1da0b2b4b49b2769ad747ed14f0.11', // Ev. Kirchengemeinde Farmsen-Berne
		'64ed11e50d524fe8a4769b56b2ac096c.11'  // Dach auf Wiese
	] 
      },
      'OHL': {
      	'portals': [
		'1889afa74f8643dabb428a4aff4f108c.12', // Kindergrab
		'd435b82f3e1749be9ec6bdb22ebca242.11', // Kapelle 9 Ohlsdorf
		'd282f42b08e3452d99b0590b0516e6e2.11', // Grablegung Jesu
		'48f9b9c4adec4cd5b1e44b87a6b8f780.12', // Mausoleum
		'179c113ef4a546d49171194f9f8c0029.12', // Merciless
		'f9ed8132e3204eeb9c044d78bec74104.11', // Hagenbeck Grab
		'ad989d35adae430ba95b7bda67aa8a9c.11', // Ein Engel
		'54bf7fb3f3da4b788da62ddb0b30b6c3.12', // Ohlsdorfer Friedhof: Engel auf
		'0cbbd28f27084e20bea0b188edddbbab.11', // Weeping Angel
		'937f70e36e244d4689746a99b135e3b0.12', // Artful Entrance Arch
		'898affcde1f14816a72ea99e9ca7e7b4.12', // Bowed Grief
		'adfb985dc72641fd89f7daab1dcd79b8.12', // The Grim Last Order
		'8450c028cd634176b6ba526d96cc1d3c.11', // Familie
		'938ead233a7443c2a1cc1a1b85b7ad0c.11'  // DER Engel	
	] 
      },
      'PuB': {
	'portals': [
		'2d862d91caca408192fe1046ec54956b.12', // Gute Medizin - Apothekergarten
		'5dabffdf85a84edb8aab6e6d65998734.12', // blau erleuchteter Fernsehturm
		'1024f011a21a4fbbaebb57dfe4fcb7b4.12', // Der Fernsehturm Hamburg vom Pl
		'6a9040e8e7bb416ebf00f224134b1b9e.12', // Planten un Blomen, beim Apothe
		'7113f34420304816a08cc8d8a3461057.12', // blau erleuchteter Fernsehturm
		'f1ab5c32d628463e9aff19b36013cf40.12', // Planten un Blomen
		'7aa547b749914c4f997b8ccfde4b76ee.12', // Planten und Blomen
		'84a3d6a8303a4ca086b16d792e9eb205.12', // Planten un Blomen
		'425da5a3fa1443d489e1a0664d1983a5.12', // Fernsehturm
		'1d7912210b464b8781075a2e019ee18f.12', // Hamburg St. Pauli, Großer Spie
		'f64cda4ccfec452e80f50fb55a7a9c14.11', // Pavillon Planten un Bloomen
		'713911ecf9ea4ab79808e66b1a9a1dd0.11', // Teehaus
		'1eaf626bd94d4c43b41283c7fdfec03a.12', // Hamburg - Planten un Blomen
		'b71dec38f9354b2ba66890bfbaebe0bc.11', // Klaus Kütemeier 1939
		'2e1a61569da64f0baf8fbb9f5c81d5fc.11', // CCH
		'837480458c0e445b8625436b57f5a531.11', // CCC Rocket
		'509b6c0ce7224c72907b00df7e8ee97b.11', // SAS Radisson Hotel
		'd48a6a143cd04494be5ecae872a4e175.16', // Botanic Garden - Hamburg
		'6d9c2effc8fc436d808a6bbbc5f054d1.12'  // Steinfigur im alten Botanische
	]      	
      }
//      '': {
//        'portals': [
//
//        ]
//      },
    };
  };
  var setup = function(){};
  // PLUGIN END //////////////////////////////////////////////////////////

  if(window.iitcLoaded && typeof setup === 'function') {
    setup();
  } else {
    if(window.bootPlugins)
      window.bootPlugins.push(setup);
    else
      window.bootPlugins = [setup];
  }
} // wrapper end
// inject code into site context
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ wrapper +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
