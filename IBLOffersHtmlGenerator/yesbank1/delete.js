async function htmlTemplate(data, templateName) {
  if (!data) {
    console.warn("No data provided. Template may contain placeholders.");
    data = {};
  }
  const TemplateHelpers = {


    getStyles: () => `
    <style type="text/css">
      body { margin: 0; padding: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; }
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table { border-collapse: collapse; border-spacing: 0; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      td { border-collapse: collapse; }
      a { color: #002ecb; text-decoration: none; }
      @media all and (max-width: 640px) {
        .table { width: 100% !important; }
        .responsive-image img { max-width: 100% !important; height: auto !important; }
        .hide { display: none !important; }
        .pdlr { padding-left: 15px !important; padding-right: 15px !important; }
        .heading { font-size: 24px !important; }
        .subheading { font-size: 18px !important; }
      }
    </style>
  `,

  getHeader: (data) => `
		<table width="500" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 500px;" role="presentation" class="table">
                  <tbody>
					  <tr>
					     <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000082; padding: 0;" class="responsive-image"><img src="${data.header || 'https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/header.png'}"  alt="Yes Bank" width="500" style="display: block; width: 500px; height: auto;"/></td>
					    </tr>			   
					   
					  </tbody>
                </table>
  `,
    getHeadlines:(TemplateHelpers,data)=>`
		<table width="500" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 500px;" role="presentation" class="table">
                  <tbody>
					  
					  <tr>
					    <td align="center" valign="top" style="padding: 30px 0 30px 0;" class="pdlr pdtb">
					      <table width="465" border="0" cellspacing="0" cellpadding="0" style="width: 465px; margin: 0 auto;" class="table" role="presentation" align="center">
					        <tbody>
					          <tr>
					            <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 30px; line-height:34px; mso-line-height-rule: exactly; color: #000082; padding: 0; font-weight: bold;" class="heading" role="heading" aria-level="1">${TemplateHelpers.processTextWithLineBreaks(data.Heading)}</td>
					            </tr>
								<tr>
								<td align="center" valign="top" style="padding: 10px 0 0 0;">
									<table width="365" border="0" cellspacing="0" cellpadding="0" style="width: 365px;" class="table" align="center" role="presentation">
  <tbody>
    <tr>
					            <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: normal; color: #0023c8; padding: 0; font-weight: normal;" class="subheading"><strong>Enjoy</strong> <span style="font-size: 34px; font-weight: 800;">1% waiver*</span> 
                                ${TemplateHelpers.processTextWithLineBreaks(data.subHeading,{fontSize: "34px", fontWeight: "800",color: "#002ecb"})}</td>
					            </tr>
								<!-- <tr>
					            <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 24px; mso-line-height-rule: exactly; color: #0023c8; padding: 0; font-weight: bold;" class="subheading">
on markup fee on ₹25,000 spends with your YES BANK Credit Card ending with 6344</td>
					            </tr> -->
	  <tr>
	  <td align="center" valign="top" style="padding: 30px 0 0 0;" class="pdtop15">
		  <table border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
  <tbody>
    <tr>
      <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; color: #ffffff; background: #e71f48; border-radius: 50px; padding: 12px 20px 10px 20px; line-height: 14px; mso-line-height-rule: exactly; text-transform: uppercase;"><a href="${data.ctaUrl}" target="_blank" style="color: #ffffff; text-decoration: none;"><strong style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(data.ctaText,{color:"#FFF"})}</strong></a></td>
    </tr>
  </tbody>
</table>

		  </td>
	  </tr>
  </tbody>
</table>

									</td>
								</tr> 
					          </tbody>
  </table>
					      </td>
					    </tr>
					   
					  </tbody>
                </table>
`,

  getFooterLinks: () => `
    <table width="500" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 500px;" role="presentation" class="table">
                  <tbody>					   
					   
					  <tr>
					    <td align="center" valign="top" style="padding: 15px 0; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 16px; color: #ffffff; text-decoration: none; text-transform: uppercase;" bgcolor="#002ecb">
					       <a href="#" target="_blank" style="color: #ffffff; text-decoration: none;"><strong style="color: #ffffff; text-decoration: none;">Credit Cards</strong></a> &nbsp;|&nbsp; <a href="#" target="_blank" style="color: #ffffff; text-decoration: none;"><strong style="color: #ffffff; text-decoration: none;">Offers</strong></a> </td>
					    </tr>
					  </tbody>
                </table>
  `,

  getYesBankFooter: () => `
    <table width="500" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 500px;" role="presentation" class="table">
                  <tbody>					   
					   
					  <tr>
					    <td align="center" valign="top" style="padding: 20px 0;" class="pdlr pdtb">
					      <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
					                <tbody>
					                  <tr>
					                    <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 16px; color: #414242;">
											Terms &amp; Conditions Apply, To know more <a href="${data.tncUrl}" target="_blank" style="color: #414242; text-decoration: underline;">click&nbsp;here</a>.</td>
					                    </tr>
					                  <tr>
					                    <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 16px; color: #414242; padding-top: 20px;">
					                      <table border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
  <tbody>
    <tr>
      <td align="center" valign="top" width="30" style="width: 30px;"><a href="#" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/fb.png" width="25" height="25" alt="Facebook" style="display: block;"/></a></td>
	  <td align="center" valign="top" width="30" style="width: 30px;"><a href="#" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/insta.png" width="25" height="25" alt="Instagram" style="display: block;"/></a></td>
	 <td align="center" valign="top" width="30" style="width: 30px;"><a href="#" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/twitter.png" width="25" height="25" alt="Twitter" style="display: block;"/></a></td>
		<td align="center" valign="top" width="30" style="width: 30px;"><a href="#" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/youtube.png" width="25" height="25" alt="Youtube" style="display: block;"/></a></td>
		<td align="center" valign="top" width="30" style="width: 30px;"><a href="#" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/yes/linkedin.png" width="25" height="25" alt="Linkedin" style="display: block;"/></a></td>
    </tr>
  </tbody>
</table>
					                      
					                      </td>
					                    </tr>
					                  
					                  </tbody>
					                </table>
					      </td>
					    </tr>
					  </tbody>
                </table>
  `,

  getDisclaimer: () => `
    <table width="500" border="0" cellpadding="0" cellspacing="0" align="center"  style="width: 500px;" role="presentation" class="table">
                  <tbody>					   
					   
					  <tr>
					    <td align="center" valign="top" style="padding: 15px 0; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 16px; color: #414242; text-decoration: none;">					      
Please do not reply to this email, this is sent from an unattended mail box. For any queries or concerns, please <a href="#" target="_blank" style="color: #002ecb; text-decoration: underline;">click here</a>.<br>
To unsubscribe, you may opt out <a href="#" target="_blank" style="color: #002ecb; text-decoration: underline;">here</a>.</td>
				    </tr>
					  </tbody>
                </table>
  `,



    
    getFooter: function (tncUrl) {
      return `<table class="footer" role="presentation" cellspacing="0" cellpadding="0" width="100%"
       style="background-color: #97282b; color: #FFF; font-size: 12px; font-weight: 400; text-align: center; border-collapse: collapse; width: 100%; min-width: 300px;font-family: Arial;">
    <tr>
        <td width="35%" style="padding: 10px 20px; text-align: left; width: 35%; background-color:#97282b;">
            <div style="margin: 0;text-decoration:    underline;"> <a href="${
              tncUrl || "https://www.indusmoments.com/"
            }" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
            Terms and conditions apply
            </a>
            </div>
        </td>
        <td class="footer-spacer-td" style="width: 5.5%; background-color: #97282b;"></td>
        <td width="75%" style="padding: 10px 10px; text-align: right; width: 75%; background-color:#97282b;">
            <a href= "https://www.indusind.com/in/en/personal/IBL-thirdparty-disclaimer.html" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
                <span style="text-decoration: underline;">Click here</span> for IndusInd Bank Disclaimer
            </a>
        </td>
    </tr>
</table>`;
    },

    getSocialIcons: function (bgcolor, lightColor) {
      const iconSize = "16";
      const iconSpacing = "1px";
      const socialLinks = [
        {
          url: "https://www.facebook.com/OfficialIndusIndBankPage",
          icon: lightColor
            ? "https://i.imgur.com/PQPkghd.png"
            : "https://i.imgur.com/RWyf7AU.png",
          alt: "Facebook",
        },
        {
          url: "https://www.instagram.com/indusind_bank/",
          icon: lightColor
            ? "https://i.imgur.com/uN59ZLq.png"
            : "https://i.imgur.com/v4b3v9B.png",
          alt: "Instagram",
        },
        {
          url: "https://www.threads.net",
          icon: lightColor
            ? "https://i.imgur.com/cEFoDYh.png"
            : "https://i.imgur.com/lTZNuny.png",
          alt: "Threads",
        },
        {
          url: "https://www.linkedin.com/company/indusind-bank/",
          icon: lightColor
            ? "https://i.imgur.com/aT9AymK.png"
            : "https://i.imgur.com/AVGxXtH.png",
          alt: "LinkedIn",
        },
        {
          url: "https://twitter.com/myindusindbank",
          icon: lightColor
            ? "https://i.imgur.com/FVcqiJt.png"
            : "https://i.imgur.com/LXJyKRm.png",
          alt: "X",
        },
      ];

      return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" 
       style="width:100%; min-width:100%; background-color:${
         bgcolor
       }; border-collapse:collapse;">
    <tr>
        <td valign="middle" style="padding:0px 10px 3px 0;background-color:${
          bgcolor
        };vertical-align: middle;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                   style="width:100%; border-collapse:collapse;background-color:${
                     bgcolor
                   };">
                <tr>
                    <!-- Logo Column -->
                    <td align="left" valign="bottom" width="61" style="padding:0;background-color:${
                      bgcolor
                    };">
                        <img src="${
                          lightColor
                            ? "https://i.imgur.com/3j0fIwT.png"
                            : "https://i.imgur.com/gKg2GX7.png"
                        }" 
         width="40" alt="IndusInd Bank"                style="display: block; width: 40px;"">
                    </td>
                    
                    <!-- Spacer Column -->
                    <td class="socialspacer" style="width:auto; padding:0;background-color:${
                      bgcolor
                    };">&nbsp;</td>
                    
                    <!-- Social Icons Column -->
                    <td align="right" valign="bottom" style="padding:0; white-space:nowrap;padding:10px 5px 10px 335px;background-color:${
                      bgcolor
                    }; vertical-align: bottom;">
                        <span style="font-size:10.17px; color:#9A413C; font-weight:600; padding-right:${iconSpacing}; vertical-align:bottom; font-family:Arial;">
                            Connect with us:
                        </span>
                        ${socialLinks
                          .map(
                            (link) => `
                        <a href="${link.url}" target="_blank" 
                           style="display:inline-block; margin:0 ${iconSpacing}; vertical-align:middle;">
                            <img src="${link.icon}" width="${iconSize}" height="${iconSize}"
                                 alt="${link.alt}" style="display:block; border:0;">
                        </a>
                        `
                          )
                          .join("")}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;
    },
    getNavbarTwoLogos: function (data, leftIconUrl, bgcolor) {
      const src =
        leftIconUrl ||
        "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Boombay/boombay-logo.png";
      return `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color:${
        bgcolor || data.color
      };" bgcolor="${bgcolor || data.color}">
        <tr>
            <!-- Left Logo -->
            <td align="left" valign="middle" style="width:50%; background-color:${
              data.color || bgcolor
            };" bgcolor="${data.color || bgcolor}">
            <img src='${src}'
                alt="Brand-logo"
                style="display:block; height:28px; width:auto; max-width:100%;" class="main-logo">
            </td>
            <td class="spacer" style="width:50px; background-color:${
              data.color || bgcolor
            };" bgcolor="${data.color || bgcolor}">&nbsp;</td>
            <!-- Right Logo -->
            <td align="right" valign="middle" style="width:50%; background-color:${
              data.color || bgcolor
            };" bgcolor="${data.color || bgcolor}">
            <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                <img src="${
                  lightColor
                    ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                    : "https://i.imgur.com/fy1Y2Pz.png"
                }" 
                    alt="Bank Logo" width="auto" height="28px" style="display: block;">
            </a>
            </td>
        </tr>
      </table>
    `;
    },

    // Navbar with one logo (right aligned)
    getNavbarSingleLogo: function (data, bgcolor) {
      return `
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr style="background-color: ${data.color || bgcolor};">
                <td align="right" style="padding: 18px;">
                <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                    <img src="${
                      lightColor
                        ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                        : "https://i.imgur.com/fy1Y2Pz.png"
                    }" 
                        alt="Bank Logo" width="240" height="28" style="display: block;">
                        </a>
                </td>
            </tr>
        </table>
    `;
    },
    processText: function (text, options = {}) {
      if (!text) return "";

      
  const styles = {
    color: options.color || "#97272b",
  fontWeight: options.fontWeight || "normal",
    fontSize: options.size || "inherit",
    fontStyle: options.fontStyle || "normal",
    textDecoration: options.underline ||  "none",
    ...(options.style || {})
  };

      const styleString = Object.entries(styles)
        .map(([key, value]) => `${key}:${value}`)
        .join(";");

      const tag = options.tag || "strong";
      // Process markdown-style bold (**text**)
      return text.replace(
        /\*\*(.*?)\*\*/g,
        `<${tag} style="${styleString}">$1</${tag}>`
      );
    },
    insertLineBreaks: function (text, delimiter = "///") {
      if (!text || typeof text !== "string") return "";
      return text.split(delimiter).join("<br>");
    },


     processTextWithLineBreaks:function(text, options = {}) {
  if (!text || typeof text !== "string") return "";

const styles = {
    color: options.color || "#97272b",
    fontWeight: options.fontWeight || "normal",
    fontSize: options.fontSize || "inherit",
    fontStyle: options.fontStyle || "normal",
    textDecoration: options.underline ||  "none",
    ...(options.style || {})
  };
       console.log("options",options);
       console.log("styles",styles);

const styleString = Object.entries(styles)
  .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`)
  .join(";");


  const tag = options.tag || "strong";
  const delimiter = options.delimiter || "/n";

  // Step 1: Replace **bold** with styled tag
  let processed = text.replace(
    /\*\*(.*?)\*\*/g,
    `<${tag} style="${styleString}">$1</${tag}>`
  );
       
processed = processed.replace(
    /\^(.*?)\^/g,
    `<sup style="vertical-align: text-top;line-height: .6em;mso-ansi-font-size: 100%; font-size: 68%;">$1</sup>`
  );

  // Step 2: Replace custom line break delimiter with <br>
  processed = processed.split(delimiter).join("<br>");

  return processed;
}

  };
  const namedColors = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
  };
  const isLightColor = (color) => {
    try {
      let hexColor;
      const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
      if (hexRegex.test(color)) {
        hexColor = color;
      } else {
        try {
          const tinyColorObj = tinycolor(color);
          if (tinyColorObj.isValid()) {
            hexColor = tinyColorObj.toHexString();
            return hexColor;
          } else {
            throw new Error("TinyColor failed");
          }
        } catch (e) {
          if (namedColors[color.toLowerCase()]) {
            hexColor = namedColors[color];
            return hexColor;
          } else {
            throw new Error("Invalid color format");
          }
        }
      }

      const hex = hexColor.replace("#", "");

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 200;
    } catch (e) {
      console.log("Invalid color format:", color);
      throw new Error("Invalid color format");
    }
  };

  const lightColor = isLightColor(data.color || "#ffffff");
  let selectedTemplate;
  const templateMap = {
    template1: Template2,
    template2: Template4,
    
  };
  if (templateMap[templateName]) {
    selectedTemplate = await templateMap[templateName].trigger({
      additionalScope: {
        data: data,
        TemplateHelpers: TemplateHelpers,
        lightColor: lightColor,
        functionName: "generate"
      },
    });
  } else {
    selectedTemplate = '<div>wrong template selected</div>';
  }
  return selectedTemplate;
}

return htmlTemplate(data, templateName);
