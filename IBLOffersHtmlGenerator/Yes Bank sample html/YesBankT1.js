function getBodySection(TemplateHelpers,data) {
  return `
    <table width="500" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="${data.backgroundColor}" style="width: 500px;" role="presentation" class="table">
                  <tbody>
					  <tr>
					    <td align="center" valign="top">
					      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
					        <tbody>
					          <tr>
					            <td align="center" valign="top" style="padding: 0 0 15px 0; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 16px; color: #414242; text-decoration: none; letter-spacing: 0.3px;" class="pdlr">${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}</td>
					            </tr>
					          <tr>
					            <td align="center" valign="top" class="responsive-image"><img src="${data.heroImage}" alt="Yes Bank" width="500" style="display: block; width: 500px; height: auto;" /></td>
					            </tr>					     
					          </tbody>
					        </table>
					      </td>
					    </tr>
					  </tbody>
                </table>
  `;
}
function getTemplate3(data, TemplateHelpers, lightColor) {
  return `

<!doctype html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<title>Yes Bank</title>
<style type="text/css">
body {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
}
body, table, td, a {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}
td {
    border-collapse: collapse;
}
a{color: #002ecb; text-decoration: none;}
@media all and (max-width: 640px) {
body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: none !important;
}
.table {
    width: 100% !important;
    clear: both!important;
    display: table!important;
    background-color:${data.backgroundColor};
}
.td-block {
    display: block !important;
    min-width: 100% !important;
    max-width: 100% !important;
    width: 100% !important;
    clear: both !important;
    float: left !important;
}
.responsive-image img {
    height: auto !important;
    max-width: 100% !important;
    width: 100% !important;
}
.hide {
    display: none !important;
    width: 100% !important;
}
.pdlr {
    padding-left: 15px !important;
    padding-right: 15px !important;
}
.pdtb {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
}
.pdtop15 {
    padding-top: 15px !important;
}
.pdbot15 {
    padding-bottom: 15px !important;
}
.pdnone {
    padding: 0 !important;
}
	.hauto{
		height: auto !important;
	}
.head {
    font-size: 24px !important;
    line-height: normal!important;
    letter-spacing: 1px !important;
}
.subhead{
    font-size: 28px !important;
    line-height: 30px!important;
    letter-spacing: .5px !important;
}
.mtext {
    font-size: 14px !important;
    line-height: 21px !important;
}
.center {
    text-align: center !important;
}
.center img,.center table{
		margin: 0 auto;
}
	.p-top-5{
		padding-top: 3px !important;
		vertical-align: top !important;
	}
	.p-top-51{
		padding-top: 0 !important;
		vertical-align: top !important;
	}
	.b-top{
		border: none!important;
		border-top: 1px solid #b9b9b9 !important;
	}
	.mob-hide{
		display: none !important;
	}
	.mob-show{
		display: block !important;
	}
	.text-left{
		text-align: left!important;
	}
	.text-center{
		text-align: center !important;
	}
	.text-center table, .text-center img{
		margin: 0 auto !important;
	}
	.pdtop10{
		padding-top: 10px !important;
	}
	.pdtop5{
		padding-top: 5px !important;
	}
	.logo{
		height: 20px !important;
		min-height: 20px !important;
		max-height: 20px !important;
		width: auto !important;
	}
	.main-logo{
		height: 20px !important;
		min-height: 20px !important;
		max-height: 20px !important;
		width: auto !important;
	}
	.heading {
    font-size: 24px !important;
    line-height: normal!important;
    letter-spacing: 1px !important;
}
.subheading{
    font-size: 18px !important;
    line-height: 24px!important;
    letter-spacing: .5px !important;
}
	.font-18{
		font-size: 18px !important;
		line-height: 24px !important;
	}
	.font-16{
		font-size: 16px !important;
		line-height: 20px !important;
	}
	.font-14{
		font-size: 14px !important;
		line-height: 18px !important;
	}
}
</style>
</head>

<body>
 
<div style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;"></div>
<table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody>
     
    <tr>
      <td align="center" valign="top" >
		  <table class="table" align="center" border="0" cellpadding="0" bgcolor="${data.backgroundColor}" style="background-color:${data.backgroundColor}" cellspacing="0" width="500" style="width: 500px; margin: 0 auto;" role="main">
          <tbody>
            <tr>
              <td align="center" valign="top">
				  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
  <tbody>
    <tr>
      <td align="center" valign="top" style="padding: 1px;" bgcolor="${data.backgroundColor}"
style="background-color:${data.backgroundColor}">
		<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
  <tbody>
    <tr>
      <td align="center" valign="top" bgcolor="${data.backgroundColor}"
style="background-color:${data.backgroundColor}">
		  <!-- Header -->
		${TemplateHelpers.getHeader(data)}
		  <!-- END header -->
		  
		  <!-- Headlines -->
		${TemplateHelpers.getHeadlines(TemplateHelpers,data)}
		  <!-- END Headlines -->
		  
		  <!-- Body -->
		
              ${getBodySection(TemplateHelpers,data)}
		  <!-- END Body -->
		  
		  <!-- Footer -->
${TemplateHelpers.getYesBankFooter(data)}
		  <!-- END Footer -->
		  
		  <!-- Footer Links -->
		${TemplateHelpers.getFooterLinks()}
		  <!-- END Footer Links -->
		  
		   
		</td>
    </tr>
  </tbody>
</table>

		</td>
    </tr>
  </tbody>
</table>

${TemplateHelpers.getDisclaimer()}       
                 </td>
            </tr>
          </tbody>
        </table></td>
    </tr>
  </tbody>
</table>
</body>
</html>
  `;
}

function getTemplate3Preview(data, TemplateHelpers, lightColor) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yes Bank</title>
  <style>
    /* Base Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Tahoma, 'Times New Roman', serif;
      background-color: "#ffffff";
      color: #414242;
    }

    a {
      color: #002ecb;
      text-decoration: none;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    .wrapper {
      max-width: 500px;
      margin: 0 auto;
      background-color: ${data.backgroundColor || "#ffffff"};
    }

    .padded {
      padding: 30px 15px;
    }

    .center {
      text-align: center;
    }

    .heading {
      font-size: 30px;
      color: #000082 !important;
      font-weight: bold;
      line-height: 34px;
    }

    .subheading {
      font-size: 20px !important;
      color: #0023c8;
      font-weight: bold;
      line-height: 24px;
    }

    .highlight {
      font-size: 34px;
      font-weight: 800;
    }

    .btn {
      display: inline-block;
      background-color: #e71f48;
      color: #fff !important;
      padding: 12px 20px;
      border-radius: 50px;
      text-transform: uppercase;
      text-decoration: none !important;
      font-size: 14px;
      font-weight: bold;
      margin-top: 30px;
    }

    .footer {
      font-size: 12px;
      padding: 20px 15px;
      text-align: center;
    }

    .footer a {
      color: #414242;
      text-decoration: underline;
    }

    .social-icons img {
      width: 25px;
      height: 25px;
      margin: 0 5px;
    }

    .footer-links {
      background: #002ecb;
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
      padding: 15px;
    }

    .footer-links a {
      color: #ffffff;
      font-weight: bold;
      margin: 0 10px;
    }

    .disclaimer {
      font-size: 12px;
      padding: 15px;
      text-align: center;
      color: #414242;
    }

    .disclaimer a {
      color: #002ecb;
      text-decoration: underline;
    }
    .social-icons{
      display:flex;
      justify-content:center;
    }

    /* Responsive */
    @media screen and (max-width: 640px) {
      .wrapper {
        width: 100% !important;
        padding: 0 15px;
      }

      .heading {
        font-size: 24px;
        letter-spacing: 1px;
      }

      .subheading {
        font-size: 18px;
      }

      .btn {
        font-size: 14px;
        padding: 10px 16px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Header Image -->
    <img src="${data.header || 'https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/header.png'}" alt="Yes Bank Header" />

    <!-- Headline -->
    <div class="padded center">
      <h1 class="heading">${TemplateHelpers.processTextWithLineBreaks(data.Heading)}</h1>
      <p class="subheading">
        ${TemplateHelpers.processTextWithLineBreaks(data.subHeadline,{fontSize: "34px", fontWeight: "800",color: "#002ecb"})}
      </p>
      <a href="${data.ctaUrl}" class="btn">${TemplateHelpers.processTextWithLineBreaks(data.ctaText,{color:"#FFF"})}</a>
    </div>

    <!-- Banner Image -->
    <div class="center">
      <p style="padding-bottom: 15px; font-size: 14px;">
        ${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}
      </p>
      <img src="${data.heroImage}" alt="Banner" />
    </div>

    <!-- Footer Content -->
    <div class="footer">
      Terms & Conditions Apply, To know more
      <a href="${data.tncUrl}">click&nbsp;here</a>.
      <div class="social-icons" style="margin-top: 20px;">
        <a href="#"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/fb.png" alt="Facebook" /></a>
        <a href="#"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/insta.png" alt="Instagram" /></a>
        <a href="#"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/youtube.png" alt="Youtube" /></a>
        <a href="#"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </div>

    <!-- Footer Links -->
    <div class="footer-links center">
      <a href="#">Credit Cards</a> | <a href="#">Offers</a>
    </div>

    <!-- Disclaimer -->
    <div class="disclaimer">
      Please do not reply to this email, this is sent from an unattended mailbox. For any queries or concerns, please
      <a href="#">click here</a>.
      <br />
      To unsubscribe, you may opt out
      <a href="#">here</a>.
    </div>
  </div>
</body>
</html>
`;
}
if(functionName === "generate"){
  return getTemplate3(data,TemplateHelpers,lightColor);
}else{
  return getTemplate3Preview(data,TemplateHelpers,lightColor);
}