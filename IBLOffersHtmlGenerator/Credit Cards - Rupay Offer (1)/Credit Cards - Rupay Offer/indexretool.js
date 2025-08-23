function getTemplate15(data, TemplateHelpers, lightColor) {
  return `<!doctype html>
<html xmlns:v="urn:schemas-microsoft-com:vml">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
	<meta name="format-detection" content="telephone=no">
	<title>YES Bank</title>
	<style type="text/css">
		*{
			font-family: 'Cairo', Arial, Helvetica, sans-serif;
		}
		a{
			outline:none !important;
		}
		table td {
			border-collapse:collapse !important;
			mso-table-lspace:0px !important;
			mso-table-rspace:0px !important;
		}
		@media all and (max-width: 500px) {

			.pd-left-right-0 {
				padding-left: 0 !important;
				padding-right: 0 !important;
			}

			.mobile-font-small {
				font-size: 17px !important;
    			width: 215px;
			}
			.key-benefits table {
				width: 48% !important;
			}
			.hideAll {
				display: none !important;
			}
			.no-br br {
				display: none !important;
			}
			body,table,td,p,a,li,blockquote {
				-webkit-text-size-adjust:none !important;
			}
			.border-dot {
				border-right:none !important;
			}
			table {
				width: 100% !important;
			}
			.customalign{
				text-align:center !important;
			}
			.customalign1{
				text-align:center !important;
				padding-top:5px !important;
			}
			.mailerColumnContainer{
				display:block !important;
				width:100% !important;
			}
			.responsive-image {
				height: auto !important;
				max-width: 100% !important;
				width: 100% !important;
			}
			.responsive-image1 {
				height: auto !important;
				max-width: 100% !important;
				width: 100% !important;
			}
			.tickwidth{
				width:100px !important;
			}
			.topheadsize{
				font-size:40px !important;
				line-height:42px !important;
			}
			.padleft{
				padding-left:14px !important;
			}
			.cardwidth{
				width:230px !important;
			}
			.buttonwidth{
				width:230px !important;
			}
			.fixline{
				width: 80px !important;
			}
			.fixlinebenefits{
				width: 125px !important;
			}
			.padleftright{
				padding-left:15px !important;
				padding-right:15px !important;
			}
			.custombottom{
				padding-top:20px !important;
			}
			.widthlogo{
				width: 250px !important;
			}
			.customicon{
				width:32px !important;
				height: 33px !important;
			}
			.paddingtop{
				padding-top:10px !important;
			}
			.fontheader{
				font-size: 20px !important;
				line-height:24px !important;
			}
			.customwidth {
				width: 150px !important;
			}
			.customwidth td{
				padding-left:5px !important;
				padding-right:5px !important;
			}
			.rs{
				padding-top:0 !important;
			}
			.hidbox{
				display:none !important;
			}
			.customwidthmob{
				width:70px !important;
			}
			.customwidthtbl{
				width:270px !important;
			}
			.customwidthlin{
				padding-left:5px !important;
				padding-right:5px !important;
			}
			.customfontheading{
				font-size:42px !important;
				line-height:44px !important;
			}
			.customwidthicon{
				width:260px !important;
			}
			.custommobspace{
				padding-left:14px !important;
				padding-right:14px !important;
			}
			.customiconwidth{
				width:180px !important;
			}
			.customwidthmob{
				width:388px !important;
			}
			.customwidthmob1 {
				width: 70px !important;
			}
			.pad-top-18 {
				padding-top: 18px !important;
			}
		}
		.border-dot {
			border-right:2px dotted #4C4C4C;
		}
		.responsive-image {
			height: auto !important;
			max-width: 100% !important;
			width: 100% !important;
		}
	</style> 
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet">
</head>
<body style="padding:0 !important; margin:0 auto !important;">
	<table width="500" border="0" align="center" cellpadding="0" cellspacing="0">
		<tr>
			<td align="center" valign="top" style="border-top: 5px solid #F2F2F2; border-left: 5px solid #F2F2F2; border-right: 5px solid #F2F2F2; border-bottom: 5px solid #F2F2F2; padding:0 !important; margin:0 auto !important;">
				<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" >  
					<!-- Logo Row -->
					<tr>
						<td align="center" valign="top" >
							<table width="500" cellspacing="0" cellpadding="0" align="center" border="0">
								<tbody>
									<tr>
										<td>
											<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
												<tbody>
													<tr>
														<td>
															<img src="${data.header}" width="100%" class="responsive-image1" style="display:block !important; margin:0 auto !important; text-align:right !important; width: 100%;" border="0">
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

					<!-- Body Text - 3 Row -->
					<tr>
						<td align="center" valign="top">
							<table width="450" cellspacing="0" cellpadding="0" align="center" border="0">
								<tbody>
									<tr>
										<td>
											<table width="420" cellspacing="0" cellpadding="0" align="center" border="0">
												<tbody>
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 30px; line-height: 1.3; color:#002ed0; padding: 20px 0 0; text-align: center;" class="padleftright">
															<strong>${TemplateHelpers.processTextWithLineBreaks(data.Heading)}</strong>
														</td>
													</tr>  
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 23px; line-height: 1.3; color:#002ed0; padding: 5px 0 0 0; text-align: center;" class="padleftright">
															<strong>${TemplateHelpers.processTextWithLineBreaks(data.Heading1)}</strong>
														</td>
													</tr>  
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 23px; line-height: 1; color:#de1f48; padding: 30px 0 15px; text-align: center;" class="padleftright">
															<strong>${TemplateHelpers.processTextWithLineBreaks(data.subHeading)}</strong>
														</td>
													</tr>  
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.5; color:#4d4d4d; padding: 0 0 5px; text-align: center;" class="padleftright no-br">
															<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
																<tr>
																	<td width="33%">
																		
																			<img src="${data.BrandImage1}" alt="" width="100%">
																		
																	</td>
																	<td style="padding: 0 5px;"></td>
																	<td width="33%">
																		
																			<img src="${data.BrandImage2}" alt="" width="100%">
																		
																	</td>
																	<td style="padding: 0 5px;"></td>
																	<td width="33%">
																		
																			<img src="${data.BrandImage3}" alt="" width="100%">
																		
																	</td>
																</tr>
															</table>
														</td>
													</tr>
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.5; color:#4d4d4d; text-align: center;" class="padleftright no-br">
															<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
																<tr>
																	<td width="33%">
																		
																			<img src="${data.BrandImage4}" alt="" width="100%">
																		
																	</td>
																	<td style="padding: 0 5px;"></td>
																	<td width="33%">
																																					<img src="${data.BrandImage5}" alt="" width="100%">
																																			</td>
																	<td style="padding: 0 5px;"></td>
																	<td width="33%">
																		
																			<img src="${data.BrandImage6}" alt="" width="100%">
																		
																	</td>
																</tr>
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
 
					<!-- offer validity text -->
					<tr>
						<td align="center" valign="top" >
							<table width="500" cellspacing="0" cellpadding="0" align="center" border="0">
								<tbody>
									<tr>
										<td>
											<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
												<tbody>
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 18px;font-weight:500; line-height: 1.3; padding: 30px 0 0; text-align: center;" class="padleftright">
															${TemplateHelpers.processTextWithLineBreaks(data.OfferEndText)}
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
	
					<!-- Banner Row -->
					<tr>
						<td align="center" valign="top" >
							<table width="500" cellspacing="0" cellpadding="0" align="center" border="0">
								<tbody>
									<tr>
										<td>
											<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
												<tbody>
													<tr>
														<td>
															<img src="${data.heroImage}" width="100%" class="responsive-image1" style="display:block !important; margin:0 auto !important; text-align:right !important; width: 100%;" border="0">
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



					<!-- Writeup Row -->
					<tr>
						<td align="center" valign="top">
							<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
								<tbody>
									<tr>
										<td>
											<table width="100%" cellspacing="0" cellpadding="0" align="center" border="0">
												<tbody>  
													<tr>
														<td style="font-family: 'Cairo', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.4; color:#4d4d4d; text-align: center; padding: 20px 0 15px;" class="padleftright">
															*Terms & Conditions apply. To know more, <a href="${data.tncUrl}" target="_blank" style="color: #4d4d4d;">click here</a>
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

					<!-- Social Links -->
					<tr>
						<td align="center" valign="top" style="padding-bottom: 20px;" class="padleftright">
							<table width="400" border="0" align="center" cellpadding="0" cellspacing="0">  
								<tbody><tr>
									<td align="left" valign="top" style="padding-top: 10px;">
										<table width="150" border="0" align="center" cellpadding="0" cellspacing="0" class="customwidth">
											<tbody><tr>
												<td align="left" valign="middle" style="padding-right:5px;">
													<a href="https://www.facebook.com/YESBANK" target="_blank">
														<img src="images/facebook.png" style="display:block !important;" alt="Facebook" border="0">
													</a>
												</td>
												<td align="left" valign="middle" style="padding-right:5px;">
													<a href="https://www.instagram.com/yes_bank/?utm_source=ETBAdobeNC&amp;utm_medium=email&amp;utm_campaign=tollfreechange" target="_blank">
														<img src="images/instagram.png" style="display:block !important;" alt="Instagram" border="0">
													</a>
												</td>
												<td align="left" valign="middle" style="padding-right:5px;">
													<a href="https://twitter.com/yesbank?utm_source=ETBAdobeNC&amp;utm_medium=email&amp;utm_campaign=tollfreechange" target="_blank">
														<img src="images/twitter.png" style="display:block !important;" alt="Twitter" border="0">
													</a>
												</td>
												<td align="left" valign="middle" style="padding-right:5px;">
													<a href="https://www.youtube.com/yesbank?utm_source=ETBAdobeNC&amp;utm_medium=email&amp;utm_campaign=tollfreechange" target="_blank">
														<img src="images/youtube.png" style="display:block !important;" alt="Youtube" border="0">
													</a>
												</td>
												<td align="left" valign="middle">
													<a href="https://www.linkedin.com/company/269604?utm_source=ETBAdobeNC&amp;utm_medium=email&amp;utm_campaign=tollfreechange" target="_blank">
														<img src="images/linkedin.png" alt="Linkedin" style="display:block !important;" border="0">
													</a>
												</td>
											</tr>
										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>

					<!-- Footer Links -->
					<tr>
						<td align="center" valign="top" bgcolor="#002ed6">
							<table width="100%" cellpadding="0" cellspacing="0" align="center" border="0">
								<tbody><tr>
									<td align="center" valign="top" class="mailerColumnContainer">
										<table width="100%" cellpadding="0" cellspacing="0">
											<tbody>
												<tr>
													<td align="center" style="font-family: 'Cairo', Arial, Helvetica, sans-serif; color: #fff; font-size: 14px; padding: 10px 0; text-transform: uppercase;">
														<a href="https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards" target="_blank" style="text-decoration: none;color: #fff;">
															<strong>CREDIT CARDS</strong>
														</a>
														<strong>&nbsp;|&nbsp;</strong> 
														<a href="https://www.yesbank.in/personal-banking/yes-individual/yes-privileges/yes-privileges-offers" target="_blank" style="text-decoration: none;color: #fff;">
															<strong>OFFERS</strong>
														</a>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</table>
			</td>
		</tr> 
	</table>
</body>
</html>`;
}

function getTemplate15preview(data, TemplateHelpers, lightColor) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YES Bank</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f6f6f6;
      font-family: 'Cairo', Arial, sans-serif;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #fff;
      overflow: hidden;
      border: 1px solid #eee;
    }

    .header img {
      width: 100%;
      height: auto;
      display: block;
    }

    .content {
      padding: 20px;
      text-align: center;
    }

    .heading {
      font-size: 26px;
      font-weight: 700;
      color: #002ed0;
      margin: 10px 0;
    }

    .subheading {
      font-size: 20px;
      font-weight: 600;
      color: #de1f48;
      margin: 20px 0 10px;
    }

    .brands {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding: 15px;
    }

    .brands img {
      width: 30%;
      max-width: 160px;
      flex: 1 1 30%;
      object-fit: contain;
    }

    .hero img {
      width: 100%;
      height: auto;
      display: block;
    }

    .tnc {
      font-size: 12px;
      color: #777;
      padding: 20px;
      line-height: 1.5;
      text-align: center;
    }

    .tnc a {
      color: #002ed0;
      text-decoration: none;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 15px;
    }

    .social a img {
      width: 28px;
      height: 28px;
    }

    .footer {
      background: #002ed6;
      padding: 15px;
      text-align: center;
    }

    .footer a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      margin: 0 8px;
    }
    .offerEndText{
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
        color: #4d4d4d;
        padding: 30px 0px 0px;
        text-align: center;
    }
    @media (max-width: 500px) {
      .heading { font-size: 22px; }
      .subheading { font-size: 18px; }
      .brands img { width: 45%; flex: 1 1 45%; }
      .footer a { display: block; margin: 5px 0; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="${data.header}" alt="YES Bank" />
    </div>

    <!-- Content -->
    <div class="content">
      <div class="heading">${TemplateHelpers.processTextWithLineBreaks(data.Heading)}</div>
      <div class="heading">${TemplateHelpers.processTextWithLineBreaks(data.Heading1)}</div>
      <div class="subheading">${TemplateHelpers.processTextWithLineBreaks(data.subHeading)}</div>
    </div>

    <!-- Brand Logos -->
    <div class="brands">
      <img src="${data.BrandImage1}" alt="">
      <img src="${data.BrandImage2}" alt="">
      <img src="${data.BrandImage3}" alt="">
      <img src="${data.BrandImage4}" alt="">
      <img src="${data.BrandImage5}" alt="">
      <img src="${data.BrandImage6}" alt="">
    </div>
    <div class="offerEndText" >${TemplateHelpers.processTextWithLineBreaks(data.OfferEndText)}</div>

    <!-- Hero Banner -->
    <div class="hero">
      <img src="${data.heroImage}" alt="Offer Banner" />
    </div>

    <!-- Terms -->
    <div class="tnc">
      *Terms & Conditions apply. To know more,
      <a href="${data.tncUrl}" target="_blank">click here</a>
    </div>

    <!-- Social Links -->
    <div class="social">
      <a href="https://www.facebook.com/YESBANK"><img src="images/facebook.png" alt="Facebook"></a>
      <a href="https://www.instagram.com/yes_bank"><img src="images/instagram.png" alt="Instagram"></a>
      <a href="https://twitter.com/yesbank"><img src="images/twitter.png" alt="Twitter"></a>
      <a href="https://www.youtube.com/yesbank"><img src="images/youtube.png" alt="YouTube"></a>
      <a href="https://www.linkedin.com/company/269604"><img src="images/linkedin.png" alt="LinkedIn"></a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <a href="https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards">CREDIT CARDS</a> |
      <a href="https://www.yesbank.in/personal-banking/yes-individual/yes-privileges/yes-privileges-offers">OFFERS</a>
    </div>
  </div>
</body>
</html>
`;
}


if(functionName === "generate"){
    return getTemplate15(data, TemplateHelpers, lightColor);
}else{
    return getTemplate15preview(data, TemplateHelpers, lightColor);
}