(function() {
  var options = {
    key: 'embedded-mnda',
    type: 'group',
    style: 'combined',
    group: 41015,
    container_selector: 'cw-selector',
    signer_id_selector: 'input_6_4',
    form_selector: '',
    block_form_submission: true,
    force_scroll: false,
    alert_message: 'Before you can submit this form, you must accept all of our legal contracts.',
    confirmation_email: true,
    triggered: false,
    contracts: [282766,243157],
    versions: ['649955ff8763a95346facb4b','64b7f8fe97b2627c36d8be1b'],
    major_versions: ['649955ff8763a95346facb4b','63ee6fa95b62ed33bfec0c0f'],
    
    auto_run: true,
    display_all: false,
    contract_html: "<div id=\"ps-group-embedded-mnda\" class=\"ps-group ps-style-combined\" data-gid=\"41015\" data-key=\"embedded-mnda\" data-legal=\"https://camunda.pactsafe.io/legal.html\">\n  <style scoped>\n    #ps-group-embedded-mnda *, #ps-group-embedded-mnda div { border: 0; margin: 0; padding: 0; min-height: 0; max-height: none; min-width: 0; max-width: none; }\n    #ps-group-embedded-mnda a { font-size: 1em; }\n    #ps-group-embedded-mnda a:hover { text-decoration: underline; }\n    #ps-group-embedded-mnda div, #ps-group-embedded-mnda p, #ps-group-embedded-mnda span { color: #444; }\n    #ps-group-embedded-mnda div.ps-contract { display: block; padding: 0 0 25px; margin: 0; color: #444; font-size: 13px; line-height: 1.5; }\n    #ps-group-embedded-mnda div.ps-checkbox-container { display: block; font-size: 1em; line-height: 1.65; padding: 0 0 0 20px; margin: 0; }\n    #ps-group-embedded-mnda input[type=\"checkbox\"].ps-contract-target { display: inline; vertical-align: middle; width: auto; min-height: 0; max-height: none; min-width: 0; max-width: none; padding: 0; margin: 0 0 0 -20px; cursor: pointer; }\n    #ps-group-embedded-mnda label.ps-contract-label { display: inline; vertical-align: middle; padding: 0; margin: 0 0 0 6px; text-transform: none; cursor: pointer; }\n    #ps-group-embedded-mnda a.ps-contract-link { display: inline; }\n    \n  </style>\n  <div id=\"ps-contracts-41015\" class=\"ps-contract\" data-multiple=\"true\" data-cid=\"282766,243157\" data-vid=\"649955ff8763a95346facb4b,64b7f8fe97b2627c36d8be1b\" data-mjvid=\"649955ff8763a95346facb4b,63ee6fa95b62ed33bfec0c0f\" style=\"display: none;\">\n    <div class=\"ps-checkbox-container ps-checkbox-line\">\n      <input type=\"checkbox\" class=\"ps-contract-target ps-combined-target ps-checkbox\" id=\"ps-contract-checkbox-group-41015\" name=\"ps-contract-checkbox-group-41015\" value=\"282766:649955ff8763a95346facb4b,243157:64b7f8fe97b2627c36d8be1b\">\n      <label for=\"ps-contract-checkbox-group-41015\" class=\"ps-contract-label\">\n        I understand and agree to <a href=\"https://camunda.pactsafe.io/legal.html?g=41015#onenda\" target=\"_blank\" rel=\"noopener\" class=\"ps-contract-link\">OneNDA</a> and <a href=\"https://camunda.pactsafe.io/legal.html?g=41015#camunda-privacy-policy\" target=\"_blank\" rel=\"noopener\" class=\"ps-contract-link\">Camunda Privacy Policy</a></label>\n          </div>\n  </div>\n</div>\n",
    locale: 'en-us',
    
  };
  
  _ps('initialize', options.key, options.type, options);
  
})(window);