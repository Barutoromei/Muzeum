$(document).ready(function () {
    $("#niemul,#brytul,#polsul,#radzul,#japoul,#amerul,#franul").hide();
    $("#niem").click(function () {
      $("#niemul").slideToggle(50);
    });
    $("#bryt").click(function () {
      $("#brytul").slideToggle(50);
    });
    $("#pols").click(function () {
      $("#polsul").slideToggle(50);
    });
    $("#radz").click(function () {
      $("#radzul").slideToggle(50);
    });
    $("#japo").click(function () {
      $("#japoul").slideToggle(50);
    });
    $("#amer").click(function () {
      $("#amerul").slideToggle(50);
    });
    $("#fran").click(function () {
      $("#franul").slideToggle(50);
    });
    $("li").mouseenter(function () {
      $(this).css("color", "white");
      $(this).css("border", "solid 1px white");
      $(this).css("background-color", "rgb(34, 46, 25)");

    });
    $("li").mouseleave(function () {
      $(this).css("color", "black");
      $(this).css("border", "solid 1px black");
      $(this).css("background-color", "rgb(98, 134, 72)");
    });

    $("#CharB1").click(function () {
      $("h1").text("Char B1");
      $("#KGL").html("<b>Powstanie</b><br>Char B1 z wyglądu przypominał pojazd pancerny z okresu I wojny światowej, gdyż jego koncepcja powstała zaledwie kilka lat po jej zakończeniu. Początkowo miał być działem samobieżnym uzbrojonym w haubicę 75 mm, umieszczoną w kadłubie. Później, już na początku lat 30., dodano do niego wieżę z armatą 47 mm, co zmieniło jednocześnie jego przeznaczenie na czołg ciężki. Pierwsze prace nad konstrukcją rozpoczęto w 1921 roku, jednak wielokrotnie były przerywane, przez co można w niej znaleźć rozwiązania z różnych okresów rozwoju technik budowy broni pancernej. Prototyp czołgu B1 ukończono w 1935 roku i był to jeden z najpotężniejszych wozów bojowych tamtego okresu. Ostateczna wersja otrzymała nazwę Char B1-bis i posiadała pancerz wzmocniony do 60 mm, zmodyfikowaną wieżę i silnik o większej mocy. Jej produkcję rozpoczęto w 1937 roku i do roku 1940 zbudowano 403 egzemplarze tego pojazdu.");
      $("#KGP").html("<b>W walce</b><br>Z powodu silnego opancerzenia i uzbrojenia Char B1, który był w stanie zniszczyć każdy niemiecki wóz bojowy używany w 1940 roku, stanowił psychologiczny wstrząs dla niemieckich żołnierzy. Jego potencjał nie został jednak w pełni wykorzystany, z jednej strony ze względu na rozproszenie tych maszyn na długim odcinku frontu, z drugiej - z uwagi na ich dużą wrażliwość na awarie i uszkodzenia.Potężnie uzbrojony czołg okazał się jednak groźny głównie w teorii. Po raz kolejny nie sprawdziła się francuska koncepcja, w myśl której dowódca czołgu miał obsługiwać główne uzbrojenie pojazdu. W warunkach szybko zmieniającego się pola walki dowodzenie czołgiem, wyszukiwanie i atakowanie celów przerastało możliwości jednego człowieka. Dodatkowym minusem było źle zaprojektowane gniazdo armaty 75 mm, umieszczonej w kadłubie. Wskutek braku miejsca w kadłubie praktycznie niemożliwe było celowanie w płaszczyźnie poziomej.W bezpośrednim pojedynku pancernym potrafiły one dać się we znaki niemieckim czołgistom. 16 maja 1940 roku pod Stonne pojedynczy pojazd tego typu, zaatakował frontalnie grupę niemieckich wozów i zniszczył 13 z nich (PzKpfw III i PzKpfw IV), pomimo otrzymania 140 trafień, wycofał się z walki niezniszczony. Również zachowała się relacja gen. Heinza Guderiana, który uznał przeciwpancerne działo 47 mm za całkowicie nieskuteczne wobec grubego pancerza francuskiego czołgu.");
      $("#nagluwek1").text("Char B1 w naszym muzeum.");
      $("#zdj1").attr("src", "CharB1.jpg");
      $("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 4<br>Trakcja:	gąsienicowa<br>Masa: 31 500 kg<br>Silnik: 6-cylindrowy Renault BDR o mocy 350 KM<br>Pancerz kadłuba: 60-55 mm<br> Pancerz Wieży: 46 mm<br>Uzbrojenie:<br> -haubica kal. 75 mm<br>-armata 34 kal. 47 mm<br>-2 karabiny maszynowe kal. 7,5 mm  ");
      $("#nagluwek2").text("Char B1 zdobyty przez Wermaht");
      $("#zdj2").attr("src", "CharB1-O2.jpg");
      $("#inf2").text("Zdobyty podczas walk w Belgii, po tym jak porzuciła go załoga z powodu zepsucia układu kierowniczego. ");
    });
    $("#HotchkissH-35").click(function () {    
      $("h1").text("Hotchkiss H-35");
      $("#KGL").html("<b>Powstanie</b><br>Na początku lat 30. XX w. dowództwo armii francuskiej zdecydowało się na wprowadzenie nowych lekkich czołgów służących do wsparcia piechoty, dla zamiany przestarzałych czołgów Renault FT. 2 sierpnia 1933 r. ogłoszono konkurs na projekt dwuosobowego czołgu 6-tonowego, w którym wzięła udział m.in. firma zbrojeniowa i motoryzacyjna Hotchkiss. Pierwszy prototyp czołgu, przedstawiony do badań komisji Vincennes w styczniu 1935, był bezwieżowy, uzbrojony w karabin maszynowy w kadłubie, lecz 19 lipca 1935 roku przedstawiono kolejny prototyp wyposażony w wieżę. W ostatecznej postaci czołg był podobny do zaprojektowanego w tym samym czasie czołgu wsparcia piechoty Renault R-35 - oba posiadały odlewany pancerz kadłuba i podobne zawieszenie, oraz wykorzystywały taką samą standardową wieżę. Mimo posiadania silnika podobnej mocy (75 KM), dzięki innym przełożeniom napędu, czołg Hotchkiss był szybszy. Załogę czołgu stanowiło 2 ludzi. Było to największą wadą tego pojazdu, gdyż dowódca musiał jednocześnie obsługiwać działko i sprzężony z nim karabin maszynowy oraz prowadzić obserwację pola walki i wydawać rozkazy. Czołg Hotchkiss początkowo został odrzucony przez piechotę, która wybrała czołg R-35, lecz dzięki większej prędkości czołg ten zyskał uznanie kawalerii, która 6 listopada 1935 zamówiła 200 sztuk. W 1937 roku zamówiono dalsze 92 sztuki i 108 dla piechoty. Oficjalnym oznaczeniem czołgu było Char léger modèle 1935 H (czołg lekki model 1935H), lecz powszechnie znany był pod skrótem H-35.");
      $("#KGP").html("<b>w Użyciu</b><br>W momencie agresji Niemiec na Francję w uzbrojeniu armii francuskiej znajdowało się ok 1000 H-35. Jednak mimo dużej liczby nie wykożystano ich dobrze ze względu na rozrzucenie na froncie w małych grupach. Nie były one w stanie zagrozić Niemieckim pojazdom pancernym przez zbyt słabe działo. Po kapitulacji Francji Niemcy urzywali ich ok. 400 Na ogół nie służyły jednak bojowo w regularnych oddziałach pancernych walczących na froncie, z uwagi na ich małą przydatność, natomiast używano ich przede wszystkim do celów szkolnych, okupacyjnych i przeciwpartyzanckich . Wyjątkowo, czołgów tych używał 211 Batalion Pancerny walczący od 1941 roku na froncie wschodnim w Finlandii. Pewna liczba została przydzielona do kompanii pancernej 7 Ochotniczej Dywizji Górskiej Waffen SS „Prinz Eugen” oraz kilku innych pododdziałów Wehrmachtu, jak również jednostek policyjnych, walczących głównie z partyzantami Tito w Jugosławii. Przez to, H-35 stał się najliczniej wykorzystywanym przez Niemców czołgiem francuskim.");
      $("#nagluwek1").text("Hotchkiss H-35 w naszym muzeum");
      $("#zdj1").attr("src", "HotchkissH-35.jpg");
      $("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 2<br>Trakcja: gąsienicowa	<br>Masa: 10 600 kg<br>Silnik: 6-cylindrowy Hotchkiss 75 KM<br>Pancerz kadłuba: 34 mm <br> Pancerz Wieży: 40 mm<br>Uzbrojenie:<br>-działko  kal. 37 mm <br>-karabin maszynowy kal. 7,5 mm ");
      $("#nagluwek2").text("Hotchkiss H-35 podczas kampanii o Gabon");
      $("#zdj2").attr("src", "HotchkissH-35-O2.jpg");
      $("#inf2").text("");
    });
    $("#SomuaS-35").click(function () {

      $("h1").text("Somua S-35");
      $("#KGL").html("<b>Powstanie</b><br>Czołg Somua S-35 powstał w odpowiedzi na wymagania dowództwa francuskiej kawalerii z czerwca 1934 roku na czołg bezpośredniego wsparcia, mający być podstawowym pojazdem uderzeniowym jednostek kawalerii zmechanizowanej. Firma Société d'Outillage Méchanique et d'Usinage d'Artillerie (w skrócie SOMUA) z Saint-Ouen przedstawiła wstępny projekt czołgu własnej konstrukcji, zaś w listopadzie 1934 roku rozpoczęła budowę prototypu na własne ryzyko, pod fabrycznym oznaczeniem AC3. Ostatecznie wojsko zamówiło budowany prototyp, przekazany do prób technicznych w kwietniu 1935 roku. W wyniku prób francuska komisja techniczna uzbrojenia (Commission de Vincennes) przekazała firmie SOMUA zalecenia, dotyczące koniecznych zmian w konstrukcji czołgu. Wskazywały one konieczność poprawy układu przeniesienia napędu, chłodzenia silnika i wentylacji przedziału bojowego oraz zmiany gąsienic z drobnoogniwowych na model o większych ogniwach. W międzyczasie SOMUA rozpoczęła produkcję pierwszej serii 50 czołgów, które dotarły do jednostek bojowych w 1937 roku. Większość zmian konstrukcyjnych wprowadzono dopiero w drugiej serii, zaaprobowanej przez wojsko w styczniu 1938 roku.");
      $("#KGP").html("<b>W walce</b><br>Czołgi Somua S-35 były uznawane za najlepiej wyposażone czołgi francuskie w chwili wybuchu II wojny światowej, jednak W kampanii 1940 roku francuskie wojska pancerne nie miały okazji wystąpić jako zwarta całość, dlatego większość jednostek, walcząc samodzielnie w charakterze taktycznego wsparcia, nie odniosła sukcesów bojowych. Dla przykładu większość z 40 czołgów S-35 użytych 19 maja 1940 roku w ataku 4. Dywizji Pancernej na most w Crécy-sur-Serre, nie mając własnej osłony z powietrza, została zniszczona przez samoloty Luftwaffe nie osiągając celu. Po Kapitulacji Francji w ręce niemieckie trafiło ponad 300 czołgów Somua S-35. Prawie wszystkie z nich włączono w skład Wehrmachtu jako PzKpfw 35-S 739(f). Były używane w walkach na Bałkanach i w początkowej fazie operacji Barbarossa przieciwko Związkowi Radzieckiemu");
      $("#nagluwek1").text("Somua S-35 w naszym muzeum");
      $("#zdj1").attr("src", "SomuaS-35.jpg");
      $("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 3<br>Trakcja:	gąsienicowa<br>Masa: 20 000 kg<br>Silnik: V-8 SOMUA AC4 190 KM  <br>Pancerz kadłuba: 47-40 mm<br> Pancerz Wieży: 42-40 mm<br>Uzbrojenie:<br>-Armata Kal. 47 mm <br>-Karabin Maszynowy Kal. 7,5 mm ");
      $("#nagluwek2").text("Somua S-35 Urzyty przez Niemcy");
      $("#zdj2").attr("src", "SomuaS-35-O2.jpg");
      $("#inf2").text("Jeden z przejentych przez Wermaht Somua S-35 podczas Ataku na ZSRR w 1941 roku.");
    });
    $("#Typ97ShinhotoChi-Ha").click(function () {

      $("h1").text("Typ 97 Shinhoto Chi-Ha");

      $("#KGL").html("<b>Powstanie</b><br>W 1937 do uzbrojenia armii japońskiej wprowadzono czołg średni Typ 97 Chi-Ha. W 1938 i 1939 jednostki uzbrojone w te czołgi wzięły udział w walkach nad jeziorem Chasan i rzeką Chałchin-Goł, ścierając się tam z radzieckimi czołgami T-26 i BT. Walki te wykazały, że używane przez Japończyków armaty czołgowe są już przestarzałe i nie są w stanie skutecznie zwalczać pojazdów opancerzonych. Problemem było także przegrzewanie się silników. W 1940 powstał prototyp nowego czołgu - zmodernizowanej wersji czołgu Typ 97. Miał on nową, powiększoną wieżę z nowoczesną armatą czołgową Typ 1. Zmodyfikowano także i wydłużono tylną część kadłuba pancernego dzięki czemu polepszyło się chłodzenie silnika. Czołgi Shinhoto Chi-Ha zostały po raz pierwszy użyte podczas walk na półwyspie Bataan. Później walczyły w Birmie, Chinach i na Okinawie. Zdobyte na Japończykach czołgi Typ 97 Shinhoto Chi-Ha były używane przez oddziały chińskie, zarówno komunistyczne, jak i Kuomintangu. ");

$("#KGP").html("<b>W walce</b> <br> Typ 97 Shinhoto Chi-Ha był podstawowym czołgiem armi japońskiej podczas II wojny światowej, jednak niemógł się równać z wrogimi konstrukcjami takimi jak M4 czy T-34. Słabe uzbrojenie i pancerz sprawiały że wówczas czołg ten był przestarzały<br>");

$("#nagluwek1").text("Typ 97 Shinhoto Chi-Ha w naszym muzeum");

$("#zdj1").attr("src", "Typ 97 Shinhoto Chi-Ha.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 4 osoby <br>Trakcja: gąsienicowa<br>Masa: 15 800 kg<br>Silnik: silnik wysokoprężny Mitsubishi o mocy 125,1 kW przy 2000 obr./min <br>Pancerz kadłuba: 8-25 mm<br> Pancerz Wieży: 8-20 mm<br>Uzbrojenie: armata czołgowa Typ 1 kalibru 47 mm (120 nab.), 2 x czkm Typ 97 kalibru 7,7 mm (2745 nab.) Użytkownicy<br> ");

$("#nagluwek2").text("Uszkodzony Typ 97 Shinhoto Chi-Ha (1944)");

$("#zdj2").attr("src", "Typ 97 Shinhoto Chi-Ha2.jpg");

$("#inf2").text("Typ 97 Shinhoto Chi-Ha który został wyeliminowany z walki przez czołg M4 Sherman podczas walki o wyspy filipińskie");

});
$("#Typ97Te-Ke").click(function () {

$("h1").text("Typ 97 Te-Ke");

$("#KGL").html("<b>Powstanie</b><br>W latach 30. XX w. w Japonii uruchomiono produkcję tankietki Typ 94 Te-Ke. Podobnie jak inne tankietki produkowane na świecie, była ona uzbrojona w pojedynczy karabin maszynowy, ale w odróżnieniu od innych pojazdów tej klasy w wozie japońskim był on montowany w wieży pancernej, a nie w kadłubie. W drugiej połowie lat 30. rozpoczęto prace nad następcą tankietki Typ 94. W zakładach Tokyo Gasu Deishu skonstruowano dwa prototypy nowych tankietek. Jeden z nich miał układ zbliżony do poprzedniej konstrukcji z silnikiem w przedniej części kadłuba, drugi typowy dla czołgów układ z silnikiem w tylnej części pojazdu. ");

$("#KGP").html("<b>W walce</b><br>Doświadczenia bojowe wykazały, że opancerzenie tankietki Typ 97 nadal jest zbyt słabe. Także uzbrojenie było nieskuteczne wobec pojazdów opancerzonych. Po 1943 większość tankietek Typ 97 została wycofana z uzbrojenia. Jej podwozie wykorzystano do budowy transportera opancerzonego Typ 98 So-Da.");

$("#nagluwek1").text("Typ 97 Te-Ke w naszym muzeum");

$("#zdj1").attr("src", "Type_97_Te-Ke.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 2 osoby<br>Trakcja: gąsienicowa<br>Masa: 4820 kg<br>Silnik: silnik wysokoprężny Ikega o mocy 47,8 kW przy 2300 obr/min<br>Pancerz kadłuba: 8-12 mm<br> Pancerz Wieży: 8-10 mm<br>Uzbrojenie: czkm Type 97 kalibru 7,7 mm (1750 nab.) lub armata czołgowa Type 94 kalibru 37 mm (66 nab.) zależnie od wersji<br> ");

$("#nagluwek2").text("Orginalny Type 97 Te-Ke który brał udział w obronie Japoni");

$("#zdj2").attr("src", "Type_97_Te-Ke2.jpg");

$("#inf2").text("");

});
$("#Typ3Chi-Nu").click(function () {

$("h1").text("Typ 3 Chi-Nu");

$("#KGL").html("<b>Powstanie</b><br>W 1941 roku armia japońska rozpoczęła testy prototypu czołgu Typ 1 Chi-He. Łączył on napęd, układ jezdny i uzbrojenie czołgu Typ 97 Shinhoto Chi-Ha, ale kadłub i wieżę skonstruowano od nowa. W następnych latach czołg ten był produkowany seryjnie, ale trwały prace nad zamocowaniem w tym czołgu armaty o większym kalibrze. W 1944 roku powstał prototyp wykorzystujący podwozie czołgu Typ 1, ale wyposażony w nową wieżę z zamontowaną armatą czołgową kalibru 75 mm Typ 3. Nowa armata miała niskie własności balistyczne, ale montaż silniejszej nie był na tym podwoziu możliwy. Do zakończenia wojny wyprodukowano 60 czołgów Typ 3 Chi-Nu. Zostały one skierowane do 3 Dywizji Pancernej broniącej Wysp Japońskich. ");

$("#KGP").html("<b>W walce</b><br>Type 3 Chi-Nu nie brał udziały w walce zamiast tego został przeznaczony do obrony wysp macierzystych w obawie przez amerykańską inwazją");

$("#nagluwek1").text("Typ 3 Chi-Nu w naszym muzeum");

$("#zdj1").attr("src", "Type_3_Chi-Nu.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5 osób<br>Trakcja:	gąsienicowa<br>Masa: 18 800 kg<br>Silnik: silnik wysokoprężny Mitsubishi Typ 100 o mocy 176,6 kW przy 2000 obr/min<br>Pancerz kadłuba: 30-50 mm<br> Pancerz Wieży: 20-40 mm<br>Uzbrojenie:armata czołgowa Typ 3 kalibru 75 mm (55 nab.), czkm Typ 97 kalibru 7,7 mm<br> ");

$("#nagluwek2").text("Type 3 Chi-Nu (1948)");

$("#zdj2").attr("src", "Typ_3_Chi-Nu_2.jpg");

$("#inf2").text("Type 3 Chi-Nu przejęty przez US ARMY w Tokyo po wojnie");

});
$("#MkIIIValentine").click(function () {

$("h1").text("Mk III Valentine");

$("#KGL").html("<b>Powstanie</b><br>Valentine skonstruowano na bazie czołgu szybkiego Cruiser Mk II (A10) w korporacji Vickers-Armstrong. Został zatwierdzony do produkcji przez brytyjskie Ministerstwo Wojny 14 lutego 1940 roku. Jak wiele innych projektów, budowa pojazdu została przyspieszona po stracie sporej części sprzętu pod Dunkierką.  Była to konstrukcja łącząca dużą masę i rozmiar czołgu piechoty oraz słaby pancerz i prędkość czołgu szybkiego. Mimo że Valentine miał gorszy pancerz oraz silnik niż Matilda Mk II, kontynuowano produkcję ze względu na niższy koszt oraz niezawodność.");

$("#KGP").html("<b>W walce</b><br>Czołgi typu Valentine na początku sego powstania mogły konkurać z ówczesnymi czołgami nimieckimi lecz już wtedy miały wady. Przede wszystkim  wadami  tego czołgu były jego ułożenie pancerza oraz liczba załogi. Z czasem zaczęto modernizować Mk III lecz i tak czołg  ten nie mógł się równać pod względem masowości  z  inną aliancką konstrukcja M4 Sherman czy też na przykład z niemieckim Tiger'em  pod względem  pancerza i uzbrojenia.");

$("#nagluwek1").text("Mk III Valentine w naszym muzeum");

$("#zdj1").attr("src", "MK 3 V.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 3-4 <br>Trakcja:	gąsienicowa<br>Masa: 17 050 kg<br>Silnik:silnik wysokoprężny, 6-cylindrowy AEC A 190<br>Pancerz kadłuba: 17-65mm<br> Pancerz Wieży: 20-45mm<br>Uzbrojenie:1 armata  kal. 40 mm  1 karabin maszynowy kal. 7,92 mm  1 przeciwlotniczy karabin maszynowy kal. 7,7 mm<br> ");

$("#nagluwek2").text("Mk III Valentine na pustyni");

$("#zdj2").attr("src", "MK 3 V2.jpg");

$("#inf2").text("Cołg Mk III Valentine na Libijskiej pustyni transportujący Szkocką piechote w drodze na front");

});
$("#MkIVChurchill").click(function () {

$("h1").text("Mk IV Churchill");

$("#KGL").html("<b>Powstanie</b><br>Ewakuujący się z Dunkierki po klęsce Francji w 1940 Brytyjski Korpus Ekspedycyjny (British Expeditionary Force - BEF) został zmuszony do porzucenia praktycznie całego sprzętu ciężkiego, w tym czołgów. Uruchomiono nowy program rozwoju broni pancernej, proponując budowę czołgu A20, zaprojektowanego jeszcze przed rozpoczęciem II wojny światowej z myślą o pozycyjnej wojnie okopowej. Był to bardzo powolny, ciężki czołg, będący w stanie pokonać zrytą kraterami „ziemię niczyją”, ale zdecydowanie nie nadawał się do prowadzenia nowoczesnej wojny manewrowej. W 1940 projekt zmodyfikowano i tak powstał czołg A22. We wrześniu 1941 roku otrzymał on dodatkowo nazwę Churchill.  Okazało się, że A22 został wprowadzony do produkcji przedwcześnie, bez przeprowadzenia odpowiednich testów polowych i jego debiut bojowy pod Dieppe był nadzwyczaj nieudany. Po wielu modyfikacjach mających na celu poprawienie jakości wozu, Churchill okazał się konstrukcją całkiem udaną i z powodzeniem wziął udział w walkach w Afryce Północnej. Żołnierze cenili zwłaszcza jego mocne opancerzenie, stosunkowo niską sylwetkę i zdolność pokonywania przeszkód terenowych, minusami było kiepskie uzbrojenie i niska prędkość maksymalna. W późniejszym okresie czołgi Churchill brały udział w walkach we Włoszech i Europie Zachodniej. ");

$("#KGP").html("<b>W walce</b><br>Czołg Mk IV Churchill w walce sprawował się dobrze, spełniał swoje przeznaczenie w roli czołgu piechoty czyli w wspieraniu piechoty w walce. Jego gruby pancerz zapewniał przyzwoitą ochronę lecz nie był wstanie zatrzymać pocisku z działa 88mm. Uzbrojenie i manewrowość pozostawiały wiele do życzenia. Pomimo to załogi lubiły swoje czołgi Churchill głównie za ochronę.");

$("#nagluwek1").text("Mk IV Churchill w naszym muzeum");

$("#zdj1").attr("src", "MK 4 C.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja: gąsienicowa<br>Masa: 38 500kg<br>Silnik: 2 silniki gaźnikowe Bedford o mocy 350 KM<br>Pancerz kadłuba: 16-102 mm<br> Pancerz Wieży: 30-60 mm<br>Uzbrojenie:1 Armata 6-funtowa kal. 57 mm  2 karabiny maszynowe Besa kal. 7,92 mm <br> ");

$("#nagluwek2").text("czołg Churchill (1943)");

$("#zdj2").attr("src", "MK 4 C2.jpg");

$("#inf2").text("");

});
$("#MkVICrusader").click(function () {

$("h1").text("Mk VI Crusader");

$("#KGL").html("<b>Powstanie</b><br>Po nieudanym modelu (A13) „Covenanter”, który nie tylko cierpiał na wiele problemów technicznych, ale okazał się także zbyt słabo opancerzony, zdecydowano poprawić opancerzenie tego czołgu. Nowa konstrukcja otrzymała oznaczenie A15 i została zaprojektowana w biurze konstrukcyjnym Nuffield Organisation.");

$("#KGP").html("<b>W walce</b><br>Crusader był szybszy od wszystkich czołgów nieprzyjaciela, ale pomimo pogrubienia pancerza, w porównaniu z nimi nadal był bardzo lekko opancerzony, miał problemy mechaniczne i nie posiadał amunicji odłamkowej do jego działa dwufuntowego (40 mm). To ostatnie ograniczenie stanowiło bardzo poważny problem, gdyż wojska Osi opracowały bardzo efektywną taktykę polegającą na wciąganiu czołgów brytyjskich do walki, a następnie wycofywaniu się za tarczę własnych, dobrze ukrytych armat przeciwpancernych o donośności większej niż zasięg karabinów maszynowych brytyjskich czołgów. Postawione w takiej sytuacji załogi czołgów angielskich miały do wyboru: albo wycofać się pod ogniem nieprzyjaciela, albo przeprowadzić samobójczą szarżę na działa wroga. ");

$("#nagluwek1").text("Mk VI Crusader w naszym muzeum");

$("#zdj1").attr("src", "MK 6 C.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja:	gąsienicowa<br>Masa: 19 800<br>Silnik: 12-cylindrowy widlasty silnik gaźnikowy chłodzony cieczą Nuffield Liberty Mk II o mocy 340 KM<br>Pancerz kadłuba: 7 - 51 mm<br> Pancerz Wieży: 10 - 27 mm<br>Uzbrojenie:armata sześciofuntowa 6-pounder QF kalibru 57 mm , km Besa 7,9 mm <br> ");

$("#nagluwek2").text("Crusader Mk II (1942)");

$("#zdj2").attr("src", "MK 6 C2.jpg");

$("#inf2").text("Crusader Mk II na Libijskiej pustyni (1942)");

});
$("#M4Sherman").click(function () {

$("h1").text("M4 Sherman");

$("#KGL").html("<b>Powstanie</b><br>Sherman bazował na podwoziu i wielu podzespołach czołgu M3 Lee, na którym zamontowano wieżę z działem 75 mm. Umożliwiło to szybkie przestawienie się zakładów na produkcję nowego pojazdu. Dlatego w okresie od lutego 1942 r. do końca II wojny światowej, wyprodukowano łącznie 49 000 sztuk wszystkich wersji.Produkcję M4 rozpoczęto w lutym 1942 r. i do lipca tegoż roku, wszystkie fabryki wytwarzające czołg M3 Lee przestawiły się na jego produkcję. Po raz pierwszy został użyty w walce przez brytyjską 8 Armię w bitwie pod El Alamein (252 szt).");

$("#KGP").html("<b>W walce</b><br>M4 Sherman był niezawodnym czołgiem, wyprodukowanym na potrzeby wojny w wielkich ilościach. W momencie wprowadzenia do boju na jesieni 1942, Sherman doskonale dawał sobie radę z czołgami niemieckimi tego okresu. Sytuacja pogorszyła się, gdy w miarę postępu wojny Shermany musiały walczyć z cięższymi czołgami niemieckimi typu Tygrys (57 t) i Pantera (45 t), które z natury rzeczy miały nad nimi znaczną przewagę. Podstawowa armata 75 mm montowana na wczesnych wersjach Shermanów, nie miała szans przebić pancerza przedniego tych modeli czołgów niemieckich. Wprowadzenie armaty M1 kal. 76 mm i pocisków przeciwpancernych M62 i M79 zniwelowało problem w znacznym stopniu - pociski te przebijały bez trudu czołowy pancerz Tygrysa z dystansu 750-1000 metrów. Po wprowadzeniu pocisków M93 problem całkowicie zniknął - mogły one przebić pancerz wroga z dystansu nawet ok. 1400 metrów. Problemów z przebiciem pancerza czołgów niemieckich nie miały również Shermany w wersji Firefly uzbrojone w doskonałą armatę 17-funtową, używane przez wojsko brytyjskie i kanadyjskie, gdzie stanowiły mniej więcej jedną czwartą wszystkich Shermanów w ostatnim roku wojny.");

$("#nagluwek1").text("M4 Sherman w naszym muzeum");

$("#zdj1").attr("src", "M4.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja: gąsienicowa<br>Masa: 30 200 kg<br>Silnik: silnik gwiazdowy, gaźnikowy, 9-cylindrowy, chłodzony powietrzem Continental (Wright Whirlwind) R 975 C4 o mocy 400KM<br>Pancerz kadłuba: 38-108 mm<br> Pancerz Wieży: 51-89 mm<br>Uzbrojenie:1 armata M3 kal. 75 mm  (M4) lub 1 haubica kal. 105 mm  (M4-105) 1 wielkokalibrowy karabin maszynowy Browning HB2 kal. 12,7 mm 2 karabiny maszynowe M 1919A4 kal. 7,62 mm <br> ");

$("#nagluwek2").text("M4 Sherman (1944)");

$("#zdj2").attr("src", "M42.jpg");

$("#inf2").text("Czołg M4 Sherman we Francji 1944");

});
$("#M5Stuart").click(function () {

$("h1").text("M5 Stuart");

$("#KGL").html("<b>Powstanie</b><br>Przez długie lata Amerykanie nie przykładali zbyt wielkiej wagi do rozwoju swojej broni pancernej. W latach 20. XX wieku zbudowali kilka lekkich czołgów wsparcia piechoty, ale nie rozwinęli ich produkcji na dużą skalę. Na początku lat trzydziestych na bazie tych konstrukcji powstał nowy typ czołgu lekkiego M2. Pod wpływem wojennych doświadczeń z Europy, wiosną 1940, Departament Zaopatrzenia opracował projekt gruntownie ulepszonej odmiany czołgu M2A4. W wyniku tych prac powstał czołg lekki M3. Otrzymał on grubszy pancerz (38-51 mm), a także poprawione zawieszenie. W czerwcu 1940 r. projekt ten został zatwierdzony i przyjęty do produkcji, którą rozpoczęto w marcu następnego roku. Wóz był kilkakrotnie modernizowany, między innymi zmieniono nitowaną wieżę na spawaną. Na początku 1942 r. wprowadzono spawany kadłub. Część pojazdów dostała nowe silniki Diesla. Powstały wersje M3, M3 (diesel), M3A1, M3A1 (diesel), M3A3, M5, M5A1. Ogółem w latach 1941-1944 wyprodukowano 22743 czołgi wszystkich wersji");

$("#KGP").html("<b>W walce</b><br>Czołg lekki M5 Stuart dysponował słabym pancerzem oraz niewielką siłą ognia nadrabiał to mobilnością. Jego zadaniem na polu bitwy za zwyczaj było flankowanie przeciwnika");

$("#nagluwek1").text("M5 Stuart w naszym muzeum");

$("#zdj1").attr("src", "M5.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 4<br>Trakcja: gąsienicowa<br>Masa: 12 900 kg<br>Silnik: 7-cylindrowy gwiazdowy silnik gaźnikowy chłodzony powietrzem Continental W-670-91 / 9-cylindrowy gwiazdowy silnik wysokoprężny chłodzony powietrzem Guiberson T-1020-4 o mocy 250 KM / 220 KM <br>Pancerz kadłuba: 16 - 44 mm<br> Pancerz Wieży: 32 - 51 mm<br>Uzbrojenie:1 x armata M6 kal. 37 mm z zapasem 106-116 pocisków  3 x karabiny maszynowe M1919A4 kal. 7,62 mm z zapasem 6400-7220 naboi<br> ");

$("#nagluwek2").text("M5 Stuart Francja (1944)");

$("#zdj2").attr("src", "M52.jpg");

$("#inf2").text("Czołg M5 Stuart 2 Dywizji pancernej USA (1944)");

});
$("#M18Hellcat").click(function () {

$("h1").text("M18 Hellcat");

$("#KGL").html("<b>Powstanie</b><br>W grudniu 1941 amerykański War Ordnance Department (departament ds. uzbrojenia) ogłosił konkurs na nowy niszczyciel czołgów z zawieszeniem typu Christie, silnikiem Wright Continental R-975 i armatą 37 mm.  Już w czasie kampanii północnoafrykańskiej (operacja Torch) zdecydowano na zmianę uzbrojenia na armatę 57 mm, a w czasie testów zwiększono jeszcze uzbrojenie główne kolejno na armaty 75 mm i 76 mm. Zdecydowano także porzucić oryginalnie zamówione podwozie Christie na rzecz podwozia z drążkiem skrętnym. W lutym 1943 zdecydowano się na ostateczny projekt i produkcja tego pojazdu rozpoczęła się w lipcu tego roku.");

$("#KGP").html("<b>W walce</b><br>M18 wziął udział w walkach w Europie od 1944 i okazał się bardzo udanym pojazdem, znakomicie nadającym się do ataków z zasadzki i szybkich rajdów na nieprzyjaciela, do czego świetnie pasowały jego niska sylwetka, wysoka prędkość i armata o dużej mocy. Był on w stanie zniszczyć praktycznie wszystkie niemieckie czołgi. W rękach dobrze wyszkolonej załogi stanowił on znakomite narzędzie, na przykład 630. batalion niszczycieli czołgów w samym tylko lipcu 1944 zniszczył 53 Pantery, 15 dział pancernych i jednego Tygrysa, tracąc przy tym tylko 17 własnych pojazdów.");

$("#nagluwek1").text("M18 Hellcat w naszym muzeum");

$("#zdj1").attr("src", "M18.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja: gąsienicowa<br>Masa: 17 700 kg<br>Silnik: silnik benzynowy, gwiazdowy, czterosuwowy Wright Continental R-975-C4 o mocy 400 KM przy 2400 obr./min <br>Pancerz kadłuba: 8-12 mm<br> Pancerz Wieży: 12-25 mm<br>Uzbrojenie: 1 x armata M1A1. M1A1C lub M1A2 kal. 76,2 mm 1 x wkm Browning M2HB kalibru 12,7 mm <br> ");

$("#nagluwek2").text("M18 Hellcat (1944)");

$("#zdj2").attr("src", "M182.jpg");

$("#inf2").text("M18 Hellcat podczas walk we Włoszech");

});
$("#7TP").click(function () {

$("h1").text("7TP");

$("#KGL").html("<b>Powstanie</b><br>polski czołg lekki skonstruowany przed II wojną światową. Obok tankietek TK-3 i TKS był podstawową bronią polskich sił pancernych podczas wojny obronnej 1939.Konstrukcja czołgu 7TP była polskim rozwinięciem brytyjskiego czołgu Vickers E, którego licencję zakupiła Polska w dwudziestoleciu międzywojennym. Czołg został zatwierdzony do produkcji wiosną 1935 roku. W porównaniu z czołgiem Vickers, 7TP miał mocniejszy silnik wysokoprężny i był pierwszym w Europie oraz jednym z pierwszych na świecie czołgów wyposażonych w tego rodzaju silnik, Pierwsze 25 czołgów wyprodukowano w przejściowym wariancie dwuwieżowym. Ostateczny wariant jednowieżowy miał w wieży opracowaną przez firmę Bofors armatę przeciwpancerną 37 mm Bofors.Brak jest pewnych danych dotyczących liczby wyprodukowanych czołgów. Podaje się często liczbę między 132-134 sztuk jako stan czołgów 7TP przed wojną.");

$("#KGP").html("<b>W walce</b><br>Czołg był stosowany w samodzielnych batalionach oraz jako wsparciem dla piechoty");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "7tp.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 3<br>Trakcja:	Gąsienicowa<br>Masa: 9 400 (dwuwieżowy) 9 900 (jednowiezowy)<br>Silnik: silnik wysokoprężny, PZInż. 235 (Saurer BLDb), 6-cylindrowy, 4-suwowy, chłodzony cieczą, o pojemności skokowej 8550 cm3. Stopień sprężania 15,5:1. Moc 110 KM (81 kW)<br>Pancerz kadłuba: 10mm-17mm/13mm-17mm<br> Pancerz Wieży: 15mm<br>Uzbrojenie:<br> wersja jednowieżowa1 armata czołgowa Bofors wz. 37 kal. 37 mm (zapas amunicji - 80 szt.), 1 karabin maszynowy wz. 30 kal. 7,92 mm (zapas amunicji - 3960 szt.), wersja dwuwieżowa2 karabiny maszynowe wz. 30 kal. 7,92 mm (zapas amunicji - 6000 szt.)");

$("#nagluwek2").text("Wkroczenie wojska polskich na Zaolzie");

$("#zdj2").attr("src", "c:\Users\PC\Desktop\na stronę projekt\7tpstary.jpg");

$("#inf2").text("Wkroczenie wojsk polskich na Zaolzie w 1938 roku. Na zdjęciu czołg 7TP z peryskopem Gundlacha");

});

$("#TKS").click(function () {

$("h1").text("TKS");

$("#KGL").html("<b>Powstanie</b><br>olska tankietka z okresu przed II wojną światową. Obok czołgu 7TP był podstawową bronią polskich sił pancernych podczas kampanii wrześniowej 1939. TKS był ulepszoną wersją tankietki TK-3. Został skonstruowany w Biurze Studiów PZInż. przez zespół pod kierunkiem inż. Edwarda Habicha. Główną zmianą była modernizacja kształtu przedniej części kadłuba, wymiana silnika oraz dodanie peryskopu dla dowódcy, zmiana opancerzenia, instalacji elektrycznej, ulepszenie układu jezdnego. Produkcja seryjna ruszyła w 1934[b][2]. Wyprodukowano łącznie 280 egzemplarzy[3]. Ponieważ uzbrojenie czołgu TKS uznano za niewystarczające, na początku 1939 roku (po wcześniejszych próbach jesienią 1938)[2] postanowiono przezbroić 250 czołgów (TK-3 i TKS łącznie) w nkm wz. 38FK kal. 20 mm, polskiej konstrukcji.");

$("#KGP").html("<b>W walce</b><br>Tankietka służyła jako pojazd rozpoznawczy oraz jako wsparcie dla piechoty");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "taniketka.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 2<br>Trakcja:	Gundlacha<br>Masa: 2 650kg<br>Silnik: silnik gaźnikowy, 6-cylindrowy Polski Fiat 122B o mocy 46 KM<br>Pancerz kadłuba: 3mm-10mm<br>Uzbrojenie:<br>karabin maszynowy Hotchkiss wz. 25 kal. 7,92 mm (zapas amunicji 1920 nabojów w 16 taśmach po 120 = 0,96 jednostki ognia [JO])lub1 najcięższy karabin maszynowy wz. 38 FK-A kal. 20 mm (zapas amunicji 80 nabojów w 16 magazynkach po 5 = 0,50 JO) ");

$("#nagluwek2").text("TKS 1939");

$("#zdj2").attr("src", "tankietkastara.jpg");

$("#inf2").text("Tankietka przekazana polskiemu wojsku przez mieszkańców Krakowa w maju 1939 roku.");

});       

$("#sp34").click(function () {

$("h1").text("Samochód pancerny wz.34");

$("#KGL").html("<b>Powstanie</b><br> lekki samochód pancerny produkcji polskiej z okresu dwudziestolecia międzywojennego. Był to podstawowy sprzęt Wojska Polskiego tej kategorii w kampanii wrześniowej.Po odzyskaniu przez Polskę niepodległości w roku 1918 w tworzonym Wojsku Polskim rozpoczęto organizowanie oddziałów samochodowych uzbrojonych m.in. w samochody pancerne. Początkowo wykorzystywano pojazdy pozostawione przez zaborców oraz zdobyte w czasie walk o granice. Ponadto zakupiono we Francji niewielkie partie samochodów Peugeot.W połowie lat 20. XX wieku postanowiono opracować lub pozyskać za granicą nowe samochody pancerne, które zastąpiłyby w Wojsku Polskim starsze konstrukcje. Początkowo, w roku 1925, planowano zbudować własne samochody pancerne w oparciu o sprowadzone do Polski w latach 1924-1925 podwozia Citroën-Kegresse B-10CV. Projekt opancerzenia podwozi opracował inż. Robert Gabeau z Biura Konstrukcyjnego Wojskowego Instytutu Badań Inżynierii (BK WIBI) przy współpracy z inż. Józefem Chacińskim z Centralnych Warsztatów Samochodowych (CWS). Dwa prototypowe samochody zbudowano w roku 1925. Wzięły one udział w ćwiczeniach na Wołyniu odbywających się we wrześniu tego samego roku. Na podstawie zdobytych doświadczeń Komitet do Spraw Uzbrojenia i Sprzętu (KSUS) zatwierdził 17 października 1925 roku projekt opancerzenia i polecił zabudowanie według tego wzoru kolejnych 90 podwozi Citroën-Kegresse. Pojawił się jednak zarzut, że podwozia te nie nadają się do tego celu. Zainteresowano się w efekcie projektem włoskiej firmy Ansaldo, która zaproponowała samochód pancerny „Polonia” powstały przez modyfikację ciągników artyleryjskich Pavesi. W styczniu 1926 roku komisja, której przewodniczącym był mjr Romiszowski, dokonała prób porównawczych samochodów firmy Ansaldo z samochodami półgąsienicowymi Citroën-Kegresse. Ostatecznie pozostano przy budowie samochodów pancernych w oparciu o podwozia półgąsienicowe. Z powodu braku pieniędzy przebudowa przebiegała z opóźnieniem i pojazdy oficjalnie przyjęto na wyposażenie Wojska Polskiego dopiero w roku 1928 pod oznaczeniem samochód pancerny wz. 28. Dostawy pojazdów zakończono w roku 1930.Doświadczenia z użytkowania pojazdów zaowocowały wprowadzeniem w kolejnych budowanych samochodach ulepszeń i zmian konstrukcyjnych. W efekcie samochody kolejnych serii produkcyjnych nieznacznie się różniły od siebie. Pojazdy początkowych serii miały przykładowo przednie koła wyposażone w masywy, później zastąpione ogumieniem pneumatycznym W pierwszych latach służby w Wojsku Polskim ujawniły się podstawowe wady samochodów pancernych wz. 28. Wbrew początkowym założeniom, napęd półgąsienicowy nie miał lepszych zdolności do pokonywania terenu niż kołowy. Za to osiągalna prędkość maksymalna była o wiele niższa, a mechanizm gąsienicowy wymagał stosunkowo częstych przeglądów i obsługi.Wobec tego postanowiono posiadane samochody wz. 28 poddać modernizacji, polegającej na przebudowie na pojazdy kołowe. Odpowiedni projekt opracowano w latach 1933-1934 w BK Broni Pancernych WIBI (po rozwiązaniu BK Br Panc WIBI w roku 1934, prace kontynuowano w Biurze Badań Technicznych Broni Pancernych - BBT Br Panc.).Przy modyfikacji postanowiono wykorzystać podzespoły pochodzące z samochodu ciężarowego Polski Fiat 614, produkowanego na licencji zakupionej we Włoszech w roku 1931. Projekt przebudowy ukończono na początku 1934 roku i wkrótce przebudowano jeden samochód. Jego próby trwały od 30 marca do końca lipca 1934 roku. Obejmowały one m.in. testy trakcyjne po piaszczystych i błotnistych drogach Puszczy Kampinoskiej, a także próby porównawcze zmodernizowanego pojazdu z oryginalnym samochodem wz. 28. Wykazały one m.in. konieczność zastosowania specjalnych gąsienic przeciwślizgowych na tylnych kołach. Po dokonaniu niezbędnych poprawek samochód uczestniczył w rajdzie doświadczalnym na trasie Warszawa-Zambrów-Grodno-Nieśwież-Brześć-Warszawa. Pozytywne wyniki prób spowodowały, że nakazano przebudowę dalszych 11 pojazdów. Prace przeprowadzono w 3 Batalionie Czołgów i Samochodów Pancernych w listopadzie 1934 roku i następnie całą serię doświadczalną przekazano do Kierownictwa Zaopatrzenia Broni Pancernych. Decyzją gen. Tadeusza Kasprzyckiego z 14 czerwca 1935 roku, przebudowany model samochodu został zatwierdzony i przyjęty na wyposażenie Wojska Polskiego pod oznaczeniem samochód pancerny wz. 34. Następnie powieloną dokumentację przesłano do warsztatów garnizonowych i jednostek, gdzie we własnym zakresie dokonano przebudowy pozostałych samochodów wz. 28.Przebudowa pojazdów odbywała się stopniowo w latach 1934-1938. Podczas tej modernizacji wykorzystano różne odmiany typowych podzespołów, co spowodowało, że powstały trzy różne odmiany samochodów (oznaczane kolejno: wz. 34, wz. 34-I oraz wz. 34-II). Ogółem powstało ok. 90 samochodów tego typu, z czego ok. 30 w wariancie wz. 34, 24 w wersji wz. 34-I oraz 36 wz. 34-II.");

$("#KGP").html("<b>W walce</b><br>Było to główne uzbrojenie wojska polskiego w tamtych czasach");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "wz34.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 2<br>Trakcja:	Kołowa<br>Masa: 2 200 kg<br>Silnik: silnik gaźnikowy Citroën B-14 o pojemności 1452 cm³ i mocy 14 KM<br>Pancerz: 6mm-8mm <br>Uzbrojenie:<br> 1 działko Puteaux SA 1918 kal. 37 mm (z zapasem amunicji 96-100 naboi)albo1 karabin maszynowy Hotchkiss wz. 25 kal. 7,92 mm (z zapasem amunicji 2000 naboi)");

$("#nagluwek2").text("Samochód pancerny wz34 podczas cwiczeń polowych");

$("#zdj2").attr("src", "wz34stary.jpg");

$("#inf2").text("Samochód pancerny wz.34 z nowym kadłubem i działkiem 37mm podczas ćwiczeń. Samochód ma początkowy wariant okrągłego jarzma działka. Jasny dysk z pionową belką to ćwiczebne oznaczenie dowódcy pierwszego plutonu.");

});
$("#ISU-152").click(function () {

$("h1").text("ISU-152");

$("#KGL").html("<b>Powstanie</b><br>Początki dział samobieżnych ISU-152 sięgają 24 stycznia 1943 roku  wtedy to pojawił się pierwszy pojazd należący do tej rodziny. Został oznaczony jako Obiekt 236 (Объект 236) i oparty był na tej samej koncepcji co późniejsze ISU-152. Pierwszy prototyp został wyprodukowany 24 stycznia 1943 roku. Próby nad prototypem zakończone 7 lutego 1943 roku nastepnie 14 lutego pojazd został wprowadzony do produkcji pod nazwą kw-14 (kb-14) w kwietniu 1943 roku zmieniono jego nazwę na SU-152 (cy-152). ISU-152 (ИСУ-152) jest modernizacją  SU-152 (cy-152) w której zmieniono podwoze czołgu KW-1S na podwozie czołgu IS zwiększono grubość pancerza oraz wprowadzono ogólne poprawki. Modernizacje roszpoczeto w lipcu 1943 roku 6 listpada 1943 roku zakceptowano poprawioną wersję a produkcje rozpoczeto w grudniu.    ");

$("#KGP").html("<b>W walce</b><br>Ciężkie działo samobieżne  używanie bylo jako ciężka altyleira samobieżna do niszczenia umocnień, wsparcia piechoty oraz jako niszczyciele czołgów. ");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "isu152.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja:	Gąsienicowa<br>Masa: 46 000 kg (model 1943), 47 300 kg (model 1945)<br>Silnik: 12-cylindrowy widlasty silnik diesla W-2IS o mocy 520 KM (382 kW) chlodzony cieczą, 12-cylindrowy widlasty silnik diesla W-54K o mocy 520 KM (382 kW) (ISU-152K, ISU-152M) chłodzony cieczą<br>Pancerz kadłuba: 20-90mm (model 1943) 20-160mm (model1945)<br>Uzbrojenie:1 x 152,4 mm haubico-armata ML-20S (zapas 20 pocisków) (ISU-152), 1 x 152,4 mm haubico-armata ML-20S (zapas 30 pocisków) (ISU-152K, ISU-152M),1 x 152,4 mm haubico-armata ML-20SM model 1944 (zapas 22 pocisków) (ISU-152 model 1945), ISU-152, ISU-152K1 x karabin 12,7 x 108 mm DSzK (zapas 250 naboi - ISU-152) (zapas 300 naboi - ISU-152K), ISU-152M 1 x karabin 12,7 x 108 mm DSzKM (zapas 300 naboi),ISU-152 model 1945 2 x karabin 12,7 x 108 mm DSzK(zapas 300 naboi)<br> ");

$("#nagluwek2").text("ISU-152 Ludowego Wojska Polskiego");

$("#zdj2").attr("src", "isu-152-lwp.jpg");

$("#inf2").text("opis tego co jest na zdjęciu ale można zostawić puste");

});

$("#T-55").click(function () {

$("h1").text("T-55");

$("#KGL").html("<b>Powstanie</b><br>Po wprowadzeniu do produkcji i eksploatacji czołgów T-54 na jaw zaczęły wychodzić niedostatki nowego czołgu średniego (później podstawowego I generacji). Największymi były słabe uzbrojenie i opancerzenie, oraz całkowity brak systemów ochrony przed użyciem broni masowego rażenia. W 1953 roku w Uralwagonzawodzie, gdzie m.in. produkowano T-54, głównym konstruktorem został Leonid Karcew. Rozpoczął on prace nad modyfikacjami projektu czołgów T-54 i doprowadził do powstania nowych wersji tego czołgu - T-54A i T-54B. Mimo iż stanowiły one krok do przodu w stosunku do pierwszej wersji T-54, w opinii Karcewa było to za mało. W związku z tym przedstawił on władzom pomysł zbudowania nowego czołgu.Pomysł ten zyskał aprobatę decydentów, przez co w 1954 roku rozpoczęto prace nad nowymi czołgami w kilku zakładach. Karcew zaprezentował wówczas projekt czołgu oznaczonego jako Obiekt 140, a Aleksander Morozow zaprezentował projekt oznaczony jako Obiekt 430. Ostatecznie po próbach porównawczych do dalszych prac skierowano pojazd oznaczony jako Obiekt 155, zaprojektowany przez Karcewa. Był on znacznie bardziej dopracowanym czołgiem T-54, wizualnie do niego dosyć podobnym, ale ilość zmian projektowych i różnic w szczegółach konstrukcji sprawiły, że w praktyce powstał zupełnie nowy czołg ktury otrzymał wojskowe oznaczenie T-55.");

$("#KGP").html("<b>W walce</b><br>T-55 był wielozadoniowym czołgiem podstawowyma na uzbrojeniu wielu armi śwata. ");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "t55.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 4<br>Trakcja:	Gąsienicowa<br>Masa: 36 500 kg<br>Silnik: 1 silnik wysokoprężny, 12-cylindrowy W-55 o mocy 580 KM<br>Pancerz kadłuba: 145mm/100mm/60mm<br> Pancerz Wieży: 300mm (320mm T-55A)/150mm/65mm <br>Uzbrojenie:1 armata wz. 1944 D-10T2S kal. 100 mm (zapas amunicji - 43-45 szt.), 2 karabiny maszynowe SGMT kal. 7,62 mm, 1 wielkokalibrowy karabin maszynowy DSzK kal. 12,7 mm.<br> ");

$("#nagluwek2").text("T-55 należące do Polskiej armi.");

$("#zdj2").attr("src", "t55pl.jpg");

$("#inf2").text("T-55 podczas defilaty z okazji 25 lecia PRL");

});    

$("#IS-2").click(function () {

$("h1").text("IS-2");

$("#KGL").html("<b>Powstanie</b><br>Latem 1943 roku powstał w zakładach w Czelabińsku pierwszy model nowego czołgu ciężkiego. Początkowo nosił on oznaczenie „obiekt 237”. Jego głównym konstruktorem był N. F. Szaszmurin. 8 sierpnia 1943 czołg został przyjęty do uzbrojenia Armii Czerwonej. Nowy pojazd otrzymał oznaczenie IS-1 (IS - Iosif Stalin) lub IS-85. Czołg był uzbrojony w armatę D-5T kal. 85 mm. Miał masę ok. 44 t. Wyprodukowano tylko 107 egzemplarzy IS-1. Ponieważ w tym okresie powstał czołg średni T-34-85 uzbrojony w identyczną armatę, zaszła potrzeba wzmocnienia uzbrojenia czołgu ciężkiego. Szybko wdrożono do produkcji czołg uzbrojony w armatę D-25T kalibru 122 mm. Nosił on początkowo oznaczenie „obiekt 240”. Po przyjęciu do uzbrojenia zmieniono je na IS-2. W trakcie produkcji czołg ulegał modernizacji. Wprowadzono w jego armacie półautomatyczny zamek klinowy w celu zwiększenia szybkostrzelności działa. Modernizacji uległ kadłub czołgu, a zwłaszcza kształt jego przednich płyt. Na włazie dowódcy zamontowano podstawę dla wielkokalibrowego karabinu maszynowego DSzK kal. 12,7 mm. Zmodernizowane pojazdy nosiły oznaczenie IS-2M");

$("#KGP").html("<b>W walce</b><br>IS-2 był kontrą ZSRR na Niemieckiego tygrysa , tworzono z nich samodzielne korpusy czołgów cieżkich, słuzyły równierz jako wsparcie dla poszczególnych korpusów wojskowych,");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "is2.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 4<br>Trakcja:	Gąsienicowa<br>Masa: 46 000 kg<br>Silnik: silnik wysokoprężny 4-suwowy, 12-cylindrowy, W-2-IS.o mocy 520 KM<br>Pancerz kadłuba: 100mm-120mmk/90mm/60mm<br> Pancerz Wieży: 100-160mm/90mm-100mm/100mm<br>Uzbrojenie:armata D-25T wz. 1943 kal. 122 mm, 1 karabin DSzK kal. 12,7 mm, 3 karabiny DT kal. 7,62 mm <br> ");

$("#nagluwek2").text("Czołgi IS-2 w Berlinie");

$("#zdj2").attr("src", "is2-2.jpg");

$("#inf2").text("Czołgi IS-2 w Berlinie. W tle Brama Brandenburska, 1945 rok.");

});  
$("#PanzerkampfwagenVITiger").click(function () {

$("h1").text("Panzerkampfwagen VI Tiger");

$("#KGL").html("<b>Powstanie</b><br>o I wojnie światowej w Niemczech tworzono projekty ciężkich czołgów już od połowy lat 20, lecz dopiero w 1937 roku zaczęto prace nad przyszłym 'Tygrysem'. Do konkursu na nowy czołg ciężki Niemiec początkowo zaangażowały się firmy MAN, Daimler-Benz oraz Henschel, jednakże w 1939 roku dołączyło do nich Porsche. Ostatecznie w konkursie pozostał Henschel i Porsche. Podczas II wojny światowej okazało się konieczne wybudowanie pojazdu zdolnego niszczyć nowe radzieckie czołgi, po tym jak zauważono, że pancerz niemieckich PzKpfw III oraz PzKpfw IV jest z łatwością przebijany przez T-34, które bez problemu je niszczyły. Wtedy odkryto również, że działo przeciwlotnicze Flak 36 kal.88 mm wykazuje się niezwykłą skutecznością w niszczeniu T-34. Niemcy postanowili więc stworzyć czołg ciężki wyposażony w tę właśnie armatę i w taki sposób narodził się pomysł na czołg PzKpfw VI Tiger. Czołg typu 'Tygrys' przyjął swój pierwotny kształt w kwietniu 1942 roku, kiedy powołano komisję, aby oceniła konkursowe prototypy. Na terenie jednostki wojskowej w Kętrzynie zaprezentowano i przetestowano modele firm Porsche i Henschel. Okazało się, że czołg Henschla, opracowany pod kierownictwem Erwina Adersa[2], nadal wykazywał przewagę nad zbyt awaryjnym prototypem Porsche. Zwycięski projekt (Henschel) otrzymał oznaczenie SdKfz 181 Panzerkampfwagen VI 'Tiger' Ausf. H1 (później, po wprowadzeniu czołgów Tiger II, zmieniono oznaczenie na Ausf. E).");

$("#KGP").html("<b>W walce</b><br>Tworzyly one samodzielne dywizje pancerne wchodziły równierz w skaład kompani pancernych. Tygrysy były uzywane na wszystkich frontach wojenych(Rosja, Tunezja, Francja, Włochy) Do dzisiaj przetrwały tylko 3 Jagdtigery");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "tygrys1.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja:	Gąsienicowa<br>Masa: 57 000 kg<br>Silnik: 12-cylindrowy gaźnikowy w układzie V chłodzony cieczą Maybach HL210 P45 o mocy 478 kW (650 KM) lub Maybach HL230 P45 o mocy 515 kW (700 KM)<br>Pancerz kadłuba: 20mm-120mm/82mm/82mm<br> Pancerz Wieży: 100mm/82mm/82mm<br>Uzbrojenie:<br> 1 armata KwK 36 L/56 kal. 88 mm (zapas amunicji - 92 szt.), 2 lub 3 karabiny maszynowe MG 34 kal. 7,92 mm (zapas amunicji - 5100 szt.)");

$("#nagluwek2").text("Tiger I Afrika Korps");

$("#zdj2").attr("src", "tygrys1tunezja.jpg");

$("#inf2").text("Tiger I wysłany jako uzupełnienie Afrika Korps działającego w Tunezji w styczniu 1943 rokue");

});

$("#PanzerjägerTiger").click(function () {

$("h1").text("Panzerjäger Tiger");

$("#KGL").html("<b>Powstanie</b><br>Niemiecki ciężki niszczyciel czołgów z okresu II wojny światowej. Jagdtigera zbudowano na nieznacznie zmodyfikowanym podwoziu czołgu ciężkiego PzKpfw VI B Königstiger (Tiger II). Był ostatnim produkowanym seryjnie niemieckim niszczycielem czołgów i najcięższym pojazdem pancernym użytym bojowo podczas II wojny światowej. Dysponował potężnym uzbrojeniem w postaci armaty PaK 44/2 L/55 kalibru 128 milimetrów, umożliwiającej niszczenie pojazdów alianckich nawet z odległości 4000 metrów. Wyprodukowany został w niewielkiej serii, nieprzekraczającej osiemdziesięciu ośmiu pojazdów. W związku z niewielką mobilnością i silnym pancerzem bywał nazywany „samobieżnym bunkrem”. Posiadał on dwie wersje zawieszenia typ Porsche oraz typ Henschel");

$("#KGP").html("<b>W walce</b><br>Jagdtiger był uzywany przez dwa bataliony ciężkich niszczycieli czołgów 512. Batalion Ciężkich Niszczycieli Czołgów oraz 653. Batalion Ciężkich Niszczycieli Czołgów. Zostały użyte między innymi jako zabespieczenie odwrotu wojsk niemieckich chcacych podac sie amerykaną przez 501 Batalion Czołgów Ciężkich SS");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "jagdtiger.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 6<br>Trakcja:	Gąsienicowa<br>Masa: 75 000 kg<br>Silnik: 12-cylindrowy, silnik gaźnikowy Maybach HL 230 P30 o mocy 700 KM (515 kW) o pojemności 23 095 cm³ chłodzony cieczą<br>Pancerz kadłuba: 25-250mm<br>Uzbrojenie:<br> 1 armata PaK 44/2 L/55 kal. 128 mm(zapas amunicji: 40 szt.), 1 lub 2 1 lub 2 karabiny maszynowe MG 34 lub MG 42 kal. 7,92 mm");

$("#nagluwek2").text("wrak Jagdtigera");

$("#zdj2").attr("src", "jagdtigerwrak.jpg");

$("#inf2").text("");

});   

$("#SturmpanzerVI").click(function () {

$("h1").text("Sturmpanzer VI");

$("#KGL").html("<b>Powstanie</b><br>Pomysł na nowy pojazd wsparcia piechoty, będący w stanie zniszczyć bronione budynki lub umocnienia jednym strzałem, zrodził się w czasie bitwy o Stalingrad w 1942. W tym czasie najcięższym działem pancernym na uzbrojeniu Wehrmachtu był Sturminfanteriegeschütz 33B, odmiana Sturmgeschütz III uzbrojona w ciężkie działo piechoty 150 mm. Jego następca Sturmpanzer IV Brummbär wszedł do produkcji na początku 1943, niemniej Wehrmacht nadal widział potrzebę podobnego, ale ciężej uzbrojonego i opancerzonego pojazdu. Zdecydowano więc zbudować nową konstrukcję opartą na podwoziu czołgu Tygrys i uzbrojoną w haubicę 210 mm. Okazało się jednak, że w tym czasie broń ta była niedostępna i została zastąpiona przez wyrzutnię moździerzowo-rakietową o kalibrze 380 mm, która powstała po zmodyfikowaniu wyrzutni bomb głębinowych używanej przez Kriegsmarine. Pierwszy prototyp powstał w październiku 1943. W tym samym miesiącu na poligonie Orzysz (niem. Arys) został zaprezentowany Hitlerowi. Po długotrwałych testach Hitler zaaprobował jego produkcję w kwietniu 1944");

$("#KGP").html("<b>W walce</b><br>Był stosowany jako ciężka mobilna altyleria samobierzna do niszczenia bunkrów, umocnień wroga itd.");

$("#nagluwek1").text("tu nic nie pisz");

$("#zdj1").attr("src", "sturmtiger.jpg");

$("#inf1").html("<b>Dane Techniczne</b><br>Załoga: 5<br>Trakcja:	Gąsienicowa<br>Masa: 68 000 kg<br>Silnik: silnik gaźnikowy Maybach HL 230 P45 o mocy 650 KM przy 2600 obr. i 700 KM przy 3000 obr.<br>Pancerz kadłuba: 150mm/80mm<br>Uzbrojenie:<br> Moździerz rakietowy 38 cm StuM RW61 L/5,4 kalibru 380 mm, 1 karabin maszynowy MG 34 kal. 7,92 mm");

$("#nagluwek2").text("Amerykańscy żołnierze z Sturmtigerem");

$("#zdj2").attr("src", "sturmtigerstary.jpg");

$("#inf2").text("Sturmtiger oglądany przez amerykańskich żołnierzy. Przed pojazdem skorupa pocisku");

});
  });