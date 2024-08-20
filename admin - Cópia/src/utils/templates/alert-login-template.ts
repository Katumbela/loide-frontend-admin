import { DateUtils } from "../dateutils";

// Template de novo dispositivo em HTML
export const newDeviceTemplate = (name: string, device: string, time: string, ip: string) => `
  <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
 <head> 
  <title></title> 
  <!--[if !mso]><!--> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
  <!--<![endif]--> 
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1" /> 
  <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style> 
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]--> 
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]--> 
  <!--[if !mso]><!--> 
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css" /> 
  <link href="https://fonts.googleapis.com/css?family=Muli:100,100i,200,200i,300,300i,400,400i,500,500i,700,700i,900,900i|Roboto:100,100i,200,200i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap" rel="stylesheet" type="text/css" /> 
  <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Muli:100,100i,200,200i,300,300i,400,400i,500,500i,700,700i,900,900i|Roboto:100,100i,200,200i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap);
        </style> 
  <!--<![endif]--> 
  <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
      }
    </style> 
  <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
.moz-text-html .mj-column-per-50 { width:50% !important; max-width: 50%; }
    </style> 
  <style type="text/css">
    
    

    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  
    </style> 
  <style type="text/css">
    @media only screen and (max-width:480px) {@viewport { width:480px; } img{height: auto !important;}  }  img {border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;} .eb-image-full-width,.eb-image-full-width table,.eb-image-full-width td,eb-image-full-width img{width:100% !important} .eb-image img{max-width: 100%;height:auto;box-sizing: border-box;} .eb-button,.eb-button a{word-break:break-word;}  .eb-button.eb-btn-full-width table{width: 100% !important;max-width: 100%;box-sizing: border-box;} .eb-button.eb-btn-full-width a{width: 100% !important;max-width: 100%;box-sizing: border-box;}  .eb-text p{margin:0;word-break: break-word;}
    </style> 
  <!-- [if mso | IE]><style type="text/css">.eb-divider p{border-top:0px solid transparent !important;}</style><![endif]--> 
 </head> 
 <body style="font-family: Arial, Helvetica, sans-serif; word-spacing: normal; background-color: #F2F2F2;" class=" eb-drag-and-drop-builder"> 
  <div style="background:#F2F2F2;background-color:#F2F2F2;"> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook mjml-section-undefined-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook mjml-section-undefined-outlook" role="presentation" style="width:600px;" width="600" bgcolor="transparent" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section mjml-section-undefined" style="background:transparent;background-color:transparent;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-undefined-outlook" style="vertical-align:top;width:600px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-undefined" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td class="mjml-content-e8a96e86-3572-c1a6-57e9-dc63668febe6" style="background:transparent;font-size:0px;word-break:break-word;"> 
                          <div style="height:50px;line-height:50px;">
                            
                          </div> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook eb-template-first-section-outlook mjml-section-8780e57f-cc60-9480-2f17-e6f9a6960eb6-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook eb-template-first-section-outlook mjml-section-8780e57f-cc60-9480-2f17-e6f9a6960eb6-outlook" role="presentation" style="width:600px;" width="600" bgcolor="#f5c000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section eb-template-first-section mjml-section-8780e57f-cc60-9480-2f17-e6f9a6960eb6" style="background:#f5c000;background-color:#f5c000;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5c000;background-color:#f5c000;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:10px 10px 10px 10px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-b09accf2-56a0-2305-7be0-c87706a08162-outlook" style="vertical-align:middle;width:580px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-b09accf2-56a0-2305-7be0-c87706a08162" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="border:1px solid transparent;vertical-align:middle;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td align="center" class="mjml-content-177d21e3-5ec8-f94d-56de-9a3f7c838642 max-width-100 eb-image" style="background:#000000;font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;"> 
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> 
                           <tbody> 
                            <tr> 
                             <td style="width:195px;"> <img alt="" src="https://dashboardassets.eb-pages.com/uploads/6317587720044544/logo_2.png" style="border:0px solid #3498DB;border-radius:0px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;max-width:100%;box-sizing: border-box;" width="195" height="auto" /> </td> 
                            </tr> 
                           </tbody> 
                          </table> </td> 
                        </tr> 
                        <tr> 
                         <td align="center" class="mjml-content-2cf58abf-5d88-bc8a-500a-911022bb96e0 eb-divider" style="background:transparent;font-size:0px;padding:10px 25px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;word-break:break-word;"> <p style="border-top:solid 1px #DADFE1;font-size:1px;margin:0px auto;width:100%;"> </p> 
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #DADFE1;font-size:1px;margin:0px auto;width:548px;" role="presentation" width="548px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--> </td> 
                        </tr> 
                        <tr> 
                         <td align="left" class="mjml-content-b5ea887b-31b5-a50a-79e8-b4ee8a600771 mj-text" style="background:transparent;font-size:0px;padding:10px 15px 10px 15px;word-break:break-word;"> 
                          <div style="font-family:Muli,Roboto,Tahoma,Helvetica,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:1.6;text-align:left;color:#000000;">
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            <span style="mso-line-height-rule:exactly;font-size: 24px; color: #000000;"><strong style="mso-line-height-rule:exactly;">Are You Trying To Log In </strong></span>
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            <span style="mso-line-height-rule:exactly;font-size: 24px; color: #000000;"><strong style="mso-line-height-rule:exactly;">From a New Device?</strong></span>
                           </div>
                          </div> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook mjml-section-359b7107-fc43-f0f8-8167-38750606553b-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook mjml-section-359b7107-fc43-f0f8-8167-38750606553b-outlook" role="presentation" style="width:600px;" width="600" bgcolor="#f5c000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section mjml-section-359b7107-fc43-f0f8-8167-38750606553b" style="background:#f5c000;background-color:#f5c000;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5c000;background-color:#f5c000;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:10px 10px 10px 10px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-dc0beb1d-b1eb-89ca-2cc5-da5236761b66-outlook" style="vertical-align:top;width:290px;" ><![endif]--> 
                 <div class="mj-column-per-50 mj-outlook-group-fix mjml-column-dc0beb1d-b1eb-89ca-2cc5-da5236761b66" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td align="center" class="mjml-content-e5cb16ef-fd84-acfa-0ea7-a7d38aae99de eb-image-full-width max-width-100 eb-image" style="background:transparent;font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;"> 
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;max-width:100%;width:260px;border-collapse:collapse;border-spacing:0px;width:100%;" class="mj-full-width-mobile"> 
                           <tbody> 
                            <tr> 
                             <td style="width:100%;" class="mj-full-width-mobile"> <img alt="" src="https://dashboardassets.eb-pages.com/uploads/6604232739258368/Final_logos__13__removebg_preview.png" style="border:0px solid #3498DB;border-radius:0px;display:block;outline:none;text-decoration:none;height:auto;min-width:100%;width:100%;max-width:100%;font-size:13px;max-width:100%;box-sizing: border-box;width:100%;" width="260" height="auto" /> </td> 
                            </tr> 
                           </tbody> 
                          </table> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td><td class="mjml-column-428a157c-6754-e814-c816-656a45676690-outlook" style="vertical-align:top;width:290px;" ><![endif]--> 
                 <div class="mj-column-per-50 mj-outlook-group-fix mjml-column-428a157c-6754-e814-c816-656a45676690" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td align="left" class="mjml-content-eb_c7b54081-130c-4be5-92c9-fef5a8022825 mj-text" style="background:transparent;font-size:0px;padding:10px 15px 10px 15px;word-break:break-word;"> 
                          <div style="font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:1.6;text-align:left;color:#000000;">
                           <div style="mso-line-height-rule:exactly;"> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">Hi ${name},</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">&nbsp;</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">We noticed a new login attempt</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">to your HakyOff account</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">from a new device, and wanted</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">to make sure it’s really you.</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">&nbsp;</p> 
                            <p style="margin:0;mso-line-height-rule:exactly;text-align: center;">Device</p> 
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            ${device}
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            IP Address
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            ${ip}
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            Time
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            ${DateUtils.formatDateTimeToPT(time)}
                           </div>
                          </div> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook mjml-section-d3e5ecac-8e81-511b-d326-980524e27ef5-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook mjml-section-d3e5ecac-8e81-511b-d326-980524e27ef5-outlook" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section mjml-section-d3e5ecac-8e81-511b-d326-980524e27ef5" style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:10px 10px 10px 10px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-757b295e-8478-c74d-561d-a2ef0b1aa704-outlook" style="vertical-align:top;width:580px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-757b295e-8478-c74d-561d-a2ef0b1aa704" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td align="left" class="mjml-content-aa2885e4-286b-83e1-7998-f32ab91a8052 mj-text" style="background:transparent;font-size:0px;padding:10px 15px 10px 15px;word-break:break-word;"> 
                          <div style="font-family:Muli,Roboto,Tahoma,Helvetica,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:1.6;text-align:left;color:#000000;">
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            <span style="mso-line-height-rule:exactly;font-size: 16px;"><strong style="mso-line-height-rule:exactly;">If you didn’t try to log in recently, </strong></span>
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            <span style="mso-line-height-rule:exactly;font-size: 16px;"><strong style="mso-line-height-rule:exactly;">we recommend you</strong></span>
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            Change your password
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;ASAP to protect your account. By changing your password, all
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            devices logged into your account will be logged out.
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            &nbsp;
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            Thanks,
                           </div> 
                           <div style="mso-line-height-rule:exactly;text-align: center;">
                            The HakyOff Team
                           </div>
                          </div> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook mjml-section-64f732a0-935b-32b1-91dd-12fee53860d8-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook mjml-section-64f732a0-935b-32b1-91dd-12fee53860d8-outlook" role="presentation" style="width:600px;" width="600" bgcolor="#250902" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section mjml-section-64f732a0-935b-32b1-91dd-12fee53860d8" style="background:#250902;background-color:#250902;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#250902;background-color:#250902;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:10px 10px 10px 10px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-undefined-outlook" style="vertical-align:top;width:580px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-undefined" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td align="center" class="mjml-content-369216a6-7e1b-e741-dcc0-aef2b51d30c3" style="background:transparent;font-size:0px;padding:10px 15px 10px 15px;word-break:break-word;"> 
                          <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Arial, sans-serif;font-size:13px;line-height:0;table-layout:auto;width:100%;border:none;"> 
                           <tbody>
                            <tr> 
                             <td style="font-family:Arial, sans-serif; text-align: center; line-height: 1.7;"> 
                              <table align="center"> 
                               <tbody> 
                                <tr> 
                                 <td style="font-family:Arial, sans-serif; text-align:center; line-height: 1.6;padding:2px 4px 2px 4px"> <a href="{{Domain.social_prefs.instagram}}" target="_blank" rel="noopener noreferrer" style="color: #0000EE; border: none; text-decoration: none;"> <img data-imagetype="External" alt="Instagram" height="30" width="30" border="0" style="vertical-align: text-bottom;max-width:100%;box-sizing: border-box;" src="https://dashboardassets.eb-pages.com/uploads/5730473482387456/facebook.png" /> </a> <img data-imagetype="External" src="https://d226aj4ao1t61q.cloudfront.net/e6iay5_rectangle.png" width="5" style="max-width:100%;box-sizing: border-box;" /> </td> 
                                 <td style="font-family:Arial, sans-serif; text-align:center; line-height: 1.6;padding:2px 4px 2px 4px"> <a href="{{Domain.social_prefs.pinterest}}" target="_blank" rel="noopener noreferrer" style="color: #0000EE; border: none; text-decoration: none;"> <img data-imagetype="External" alt="Pinterest" height="30" width="30" border="0" style="vertical-align: text-bottom;max-width:100%;box-sizing: border-box;" src="https://dashboardassets.eb-pages.com/uploads/5730473482387456/twitter.png" /> </a> <img data-imagetype="External" src="https://d226aj4ao1t61q.cloudfront.net/e6iay5_rectangle.png" width="5" style="max-width:100%;box-sizing: border-box;" /> </td> 
                                 <td style="font-family:Arial, sans-serif; text-align:center; line-height: 1.6;padding:2px 4px 2px 4px"> <a href="{{Domain.social_prefs.youtube}}" target="_blank" rel="noopener noreferrer" style="color: #0000EE; border: none; text-decoration: none;"> <img data-imagetype="External" alt="Youtube" height="30" width="30" border="0" style="vertical-align: text-bottom;max-width:100%;box-sizing: border-box;" src="https://dashboardassets.eb-pages.com/uploads/5730473482387456/twitter.png" /> </a> <img data-imagetype="External" src="https://d226aj4ao1t61q.cloudfront.net/e6iay5_rectangle.png" width="5" style="max-width:100%;box-sizing: border-box;" /> </td>
                                </tr>
                               </tbody>
                              </table></td>
                            </tr> 
                           </tbody>
                          </table> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook eb-footer-container-outlook eb-template-last-section-outlook mjml-section-id1614841174008RAND3404-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook eb-footer-container-outlook eb-template-last-section-outlook mjml-section-id1614841174008RAND3404-outlook" role="presentation" style="width:600px;" width="600" bgcolor="transparent" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section eb-footer-container eb-template-last-section mjml-section-id1614841174008RAND3404" style="background:transparent;background-color:transparent;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:30px 10px 0px 10px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-undefined-outlook" style="vertical-align:top;width:580px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-undefined" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px 0px 0px 0px ;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
    <tbody> 
     <tr> 
      <td> 
       <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
       <div style="margin:0px auto;max-width:600px;"> 
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> 
         <tbody> 
          <tr> 
           <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="eb-section-outlook mjml-section-undefined-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="eb-section-outlook mjml-section-undefined-outlook" role="presentation" style="width:600px;" width="600" bgcolor="transparent" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> 
            <div class="eb-section mjml-section-undefined" style="background:transparent;background-color:transparent;margin:0px auto;max-width:600px;"> 
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;"> 
              <tbody> 
               <tr> 
                <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"> 
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-column-undefined-outlook" style="vertical-align:top;width:600px;" ><![endif]--> 
                 <div class="mj-column-per-100 mj-outlook-group-fix mjml-column-undefined" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> 
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                   <tbody> 
                    <tr> 
                     <td style="vertical-align:top;padding:0px;"> 
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"> 
                       <tbody> 
                        <tr> 
                         <td class="mjml-content-e8a96e86-3572-c1a6-57e9-dc63668febe6" style="background:transparent;font-size:0px;word-break:break-word;"> 
                          <div style="height:50px;line-height:50px;">
                            
                          </div> </td> 
                        </tr> 
                       </tbody> 
                      </table> </td> 
                    </tr> 
                   </tbody> 
                  </table> 
                 </div> 
                 <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
               </tr> 
              </tbody> 
             </table> 
            </div> 
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <!--[if mso | IE]></td></tr></table><![endif]--> </td> 
     </tr> 
    </tbody> 
   </table> 
  </div>   
 </body>
</html>
`;