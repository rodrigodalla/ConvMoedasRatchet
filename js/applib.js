$(function() {
	carregarSelectMoedas('1','Selecione Primeira Moeda:');
	carregarSelectMoedas('2','Selecione Segunda Moeda:');
	loadLocalData();

	$("button").bind('click', function () {
		$(".alert").alert('close');					
		ConverterMoeda();
	});

	$('.alert .close').bind("click", function (e) {
		$(this).parent().hide();
	});
});

function carregarSelectMoedas(id,titulo){
    var divcomboMoeda = "<span>" + titulo + "</span>" + 
						"<select id='optMoeda" + id + "' class='form-control'>" +
						"<option id='AED" + id + "' value='AED'>AED - United Arab Emirates Dirham</option>" +
						"<option id='ANG" + id + "' value='ANG'>ANG - Netherlands Antillean Guilder</option>" +
						"<option id='ARS" + id + "' value='ARS'>ARS - Argentine Peso</option>" +
						"<option id='AUD" + id + "' value='AUD'>AUD - Australian Dollar</option>" +
						"<option id='BGN" + id + "' value='BGN'>BGN - Bulgarian Lev</option>" +
						"<option id='BHD" + id + "' value='BHD'>BHD - Bahraini Dinar</option>" +
						"<option id='BND" + id + "' value='BND'>BND - Brunei Dollar</option>" +
						"<option id='BOB" + id + "' value='BOB'>BOB - Bolivian Boliviano</option>" +
						"<option id='BRL" + id + "' value='BRL'>BRL - Brazilian Real</option>" +
						"<option id='BWP" + id + "' value='BWP'>BWP - Botswanan Pula</option>" +
						"<option id='CAD" + id + "' value='CAD'>CAD - Canadian Dollar</option>" +
						"<option id='CHF" + id + "' value='CHF'>CHF - Swiss Franc</option>" +
						"<option id='CLP" + id + "' value='CLP'>CLP - Chilean Peso</option>" +
						"<option id='CNY" + id + "' value='CNY'>CNY - Chinese Yuan</option>" +
						"<option id='COP" + id + "' value='COP'>COP - Colombian Peso</option>" +
						"<option id='CRC" + id + "' value='CRC'>CRC - Costa Rican Colón</option>" +
						"<option id='CZK" + id + "' value='CZK'>CZK - Czech Republic Koruna</option>" +
						"<option id='DKK" + id + "' value='DKK'>DKK - Danish Krone</option>" +
						"<option id='DOP" + id + "' value='DOP'>DOP - Dominican Peso</option>" +
						"<option id='DZD" + id + "' value='DZD'>DZD - Algerian Dinar</option>" +
						"<option id='EEK" + id + "' value='EEK'>EEK - Estonian Kroon</option>" +
						"<option id='EGP" + id + "' value='EGP'>EGP - Egyptian Pound</option>" +
						"<option id='EUR" + id + "' value='EUR'>EUR - Euro</option>" +
						"<option id='FJD" + id + "' value='FJD'>FJD - Fijian Dollar</option>" +
						"<option id='GBP" + id + "' value='GBP'>GBP - British Pound Sterling</option>" +
						"<option id='HKD" + id + "' value='HKD'>HKD - Hong Kong Dollar</option>" +
						"<option id='HNL" + id + "' value='HNL'>HNL - Honduran Lempira</option>" +
						"<option id='HRK" + id + "' value='HRK'>HRK - Croatian Kuna</option>" +
						"<option id='HUF" + id + "' value='HUF'>HUF - Hungarian Forint</option>" +
						"<option id='IDR" + id + "' value='IDR'>IDR - Indonesian Rupiah</option>" +
						"<option id='ILS" + id + "' value='ILS'>ILS - Israeli New Sheqel</option>" +
						"<option id='INR" + id + "' value='INR'>INR - Indian Rupee</option>" +
						"<option id='JMD" + id + "' value='JMD'>JMD - Jamaican Dollar</option>" +
						"<option id='JOD" + id + "' value='JOD'>JOD - Jordanian Dinar</option>" +
						"<option id='JPY" + id + "' value='JPY'>JPY - Japanese Yen</option>" +
						"<option id='KES" + id + "' value='KES'>KES - Kenyan Shilling</option>" +
						"<option id='KRW" + id + "' value='KRW'>KRW - South Korean Won</option>" +
						"<option id='KWD" + id + "' value='KWD'>KWD - Kuwaiti Dinar</option>" +
						"<option id='KYD" + id + "' value='KYD'>KYD - Cayman Islands Dollar</option>" +
						"<option id='KZT" + id + "' value='KZT'>KZT - Kazakhstani Tenge</option>" +
						"<option id='LBP" + id + "' value='LBP'>LBP - Lebanese Pound</option>" +
						"<option id='LKR" + id + "' value='LKR'>LKR - Sri Lankan Rupee</option>" +
						"<option id='LTL" + id + "' value='LTL'>LTL - Lithuanian Litas</option>" +
						"<option id='LVL" + id + "' value='LVL'>LVL - Latvian Lats</option>" +
						"<option id='MAD" + id + "' value='MAD'>MAD - Moroccan Dirham</option>" +
						"<option id='MDL" + id + "' value='MDL'>MDL - Moldovan Leu</option>" +
						"<option id='MKD" + id + "' value='MKD'>MKD - Macedonian Denar</option>" +
						"<option id='MUR" + id + "' value='MUR'>MUR - Mauritian Rupee</option>" +
						"<option id='MXN" + id + "' value='MXN'>MXN - Mexican Peso</option>" +
						"<option id='MYR" + id + "' value='MYR'>MYR - Malaysian Ringgit</option>" +
						"<option id='NAD" + id + "' value='NAD'>NAD - Namibian Dollar</option>" +
						"<option id='NGN" + id + "' value='NGN'>NGN - Nigerian Naira</option>" +
						"<option id='NIO" + id + "' value='NIO'>NIO - Nicaraguan Córdoba</option>" +
						"<option id='NOK" + id + "' value='NOK'>NOK - Norwegian Krone</option>" +
						"<option id='NPR" + id + "' value='NPR'>NPR - Nepalese Rupee</option>" +
						"<option id='NZD" + id + "' value='NZD'>NZD - New Zealand Dollar</option>" +
						"<option id='OMR" + id + "' value='OMR'>OMR - Omani Rial</option>" +
						"<option id='PEN" + id + "' value='PEN'>PEN - Peruvian Nuevo Sol</option>" +
						"<option id='PGK" + id + "' value='PGK'>PGK - Papua New Guinean Kina</option>" +
						"<option id='PHP" + id + "' value='PHP'>PHP - Philippine Peso</option>" +
						"<option id='PKR" + id + "' value='PKR'>PKR - Pakistani Rupee</option>" +
						"<option id='PLN" + id + "' value='PLN'>PLN - Polish Zloty</option>" +
						"<option id='PYG" + id + "' value='PYG'>PYG - Paraguayan Guarani</option>" +
						"<option id='QAR" + id + "' value='QAR'>QAR - Qatari Rial</option>" +
						"<option id='RON" + id + "' value='RON'>RON - Romanian Leu</option>" +
						"<option id='RSD" + id + "' value='RSD'>RSD - Serbian Dinar</option>" +
						"<option id='RUB" + id + "' value='RUB'>RUB - Russian Ruble</option>" +
						"<option id='SAR" + id + "' value='SAR'>SAR - Saudi Riyal</option>" +
						"<option id='SCR" + id + "' value='SCR'>SCR - Seychellois Rupee</option>" +
						"<option id='SEK" + id + "' value='SEK'>SEK - Swedish Krona</option>" +
						"<option id='SGD" + id + "' value='SGD'>SGD - Singapore Dollar</option>" +
						"<option id='SKK" + id + "' value='SKK'>SKK - Slovak Koruna</option>" +
						"<option id='SLL" + id + "' value='SLL'>SLL - Sierra Leonean Leone</option>" +
						"<option id='SVC" + id + "' value='SVC'>SVC - Salvadoran Colón</option>" +
						"<option id='THB" + id + "' value='THB'>THB - Thai Baht</option>" +
						"<option id='TND" + id + "' value='TND'>TND - Tunisian Dinar</option>" +
						"<option id='TRY" + id + "' value='TRY'>TRY - Turkish Lira</option>" +
						"<option id='TTD" + id + "' value='TTD'>TTD - Trinidad and Tobago Dollar</option>" +
						"<option id='TWD" + id + "' value='TWD'>TWD - New Taiwan Dollar</option>" +
						"<option id='TZS" + id + "' value='TZS'>TZS - Tanzanian Shilling</option>" +
						"<option id='UAH" + id + "' value='UAH'>UAH - Ukrainian Hryvnia</option>" +
						"<option id='UGX" + id + "' value='UGX'>UGX - Ugandan Shilling</option>" +
						"<option id='USD" + id + "' value='USD'>USD - US Dollar</option>" +
						"<option id='UYU" + id + "' value='UYU'>UYU - Uruguayan Peso</option>" +
						"<option id='UZS" + id + "' value='UZS'>UZS - Uzbekistan Som</option>" +
						"<option id='VEF" + id + "' value='VEF'>VEF - Venezuelan Bolívar</option>" +
						"<option id='VND" + id + "' value='VND'>VND - Vietnamese Dong</option>" +
						"<option id='XOF" + id + "' value='XOF'>XOF - CFA Franc BCEAO</option>" +
						"<option id='YER" + id + "' value='YER'>YER - Yemeni Rial</option>" +
						"<option id='ZAR" + id + "' value='ZAR'>ZAR - South African Rand</option>" +
						"<option id='ZMK" + id + "' value='ZMK'>ZMK - Zambian Kwacha (1968–2012)</option>" +
						"</select>";

	document.getElementById("divcomboMoeda"+id).innerHTML=divcomboMoeda;
}

function loadLocalData() {
    var moeda1 = localStorage.getItem('ConvMoeda_Moeda1');
    var moeda2 = localStorage.getItem('ConvMoeda_Moeda2');

    if (moeda1 == null) {
        moeda1 = 'BRL';
        localStorage.setItem('ConvMoeda_Moeda1', moeda1);
    }
	document.getElementById(moeda1+'1').selected=true;

    if (moeda2 == null) {
        moeda2 = 'USD';
        localStorage.setItem('ConvMoeda_Moeda2', moeda2);
    }
	document.getElementById(moeda2+'2').selected=true;
}

function MostraMsg(tipo,msg) {
    //tipo = danger | success | warning
    var divalert = "<div id='alert" + tipo + "' class='alert alert-" + tipo + " fade in'>" +
				   "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>";				  
				  if(tipo=='danger') {
					divalert += "<h4>Ops! Ocorreu um erro no App!</h4>";
				  }
				  else if(tipo=='success') {
					divalert += "<h4>Resultado da Conversão</h4>";
				  }
				  divalert += "<div id='divmsg" + tipo + "'><p>" + msg + "</p></div></div>";
				  
	document.getElementById("divalert"+tipo).innerHTML=divalert;
}

function ConvMoedaChamarWebService(moeda1, moeda2, msg) {
	$.ajax({
		url: 'http://openexchangerates.org/api/latest.json?app_id=f7cc54a18b4a415594a382425d580e84',
		dataType: 'JSONP',
		success: function(json) {
			var msgResult = '';
			if(moeda1=='USD') {
				msgResult += '1 ' + moeda1 + ' é igual a ' + String(json.rates[moeda2]).substring(0,6) + ' ' + moeda2 + '<br>' +
							 '1 ' + moeda2 + ' é igual a ' + String(1/json.rates[moeda2]).substring(0,6) + ' ' + moeda1;						
			}
			else if(moeda2=='USD') {
				msgResult += '1 ' + moeda1 + ' é igual a ' + String(1/json.rates[moeda1]).substring(0,6) + ' ' + moeda2 + '<br>' +
							 '1 ' + moeda2 + ' é igual a ' + String(json.rates[moeda1]).substring(0,6) + ' ' + moeda1;						
			}
			else {
				msgResult += '1 ' + moeda1 + ' é igual a ' + String(json.rates[moeda2]/json.rates[moeda1]).substring(0,6) + ' ' + moeda2 + '<br>' +
							 '1 ' + moeda2 + ' é igual a ' + String(json.rates[moeda1]/json.rates[moeda2]).substring(0,6) + ' ' + moeda1;			
			}			
			MostraMsg('success',msgResult);
		}
	});
}

/*
function ConvMoedaChamarWebService(moeda1, moeda2, msg) {
    $.ajax({
        type: 'GET',
        url: 'http://rate-exchange.appspot.com/currency?callback=?&from=' + moeda1 + '&to=' + moeda2,
        dataType: "JSONP",
		async: false,
		jsonpCallback: "JsonpCallback",
        success: function (data) {
		alert('sucesso');
			var msgResult = '1 ' + moeda1 + ' é igual a ' + data.rate + ' ' + moeda2;
			if(msg=='') { ConvMoedaChamarWebService(moeda2, moeda1, msgResult); } 
			else { MostraMsg('success',msg + '<br>' + msgResult); }
        },
    });
}
*/

function JsonpCallback(json) {
alert('jsonpcallback');
	if (json.Error) {
		MostraMsg('danger',json.Message);
	}
}

function ConverterMoeda() {
    try {
        var optMoeda1 = document.getElementById("optMoeda1");
        var moeda1 = optMoeda1.options[optMoeda1.selectedIndex].value;

        var optMoeda2 = document.getElementById("optMoeda2");
        var moeda2 = optMoeda2.options[optMoeda2.selectedIndex].value;
		
		if(moeda1==moeda2) {
			MostraMsg('warning','Você selecionou a mesma moeda nas duas opções. Selecione moedas diferentes e tente novamente.');
		}
		else {
			ConvMoedaChamarWebService(moeda1, moeda2, '');
			localStorage.setItem('ConvMoeda_Moeda1', moeda1);
			localStorage.setItem('ConvMoeda_Moeda2', moeda2);
		}

				
    } catch (err) {
		MostraMsg('danger',err.message);
    }
}