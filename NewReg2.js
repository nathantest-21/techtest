{
  "id": "14297eca-aa4d-43d3-971f-fc61c48be2ff",
  "version": "2.0",
  "name": "NewReg",
  "url": "https://moneygaming.qa.gameaccount.com",
  "tests": [{
    "id": "564716b8-d087-4688-8fb0-6b12c6fc3922",
    "name": "newRegistration",
    "commands": [{
      "id": "3f76fa38-b170-4219-8b97-de545bff0e38",
      "comment": "",
      "command": "open",
      "target": "/",
      "targets": [],
      "value": ""
    }, {
      "id": "a0a023aa-6fc6-4e21-8c5c-ff05f74be70b",
      "comment": "",
      "command": "setWindowSize",
      "target": "1321x777",
      "targets": [],
      "value": ""
    }, {
      "id": "dca8c9d3-6451-4f8d-b9b6-558fbe81322e",
      "comment": "",
      "command": "mouseOver",
      "target": "linkText=Games",
      "targets": [
        ["linkText=Games", "linkText"],
        ["css=.our-games > a", "css:finder"],
        ["xpath=//a[contains(text(),'Games')]", "xpath:link"],
        ["xpath=//a[contains(@href, '/our-games.shtml')]", "xpath:href"],
        ["xpath=//li[5]/a", "xpath:position"],
        ["xpath=//a[contains(.,'Games')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "14a611bc-77c1-4cbb-8172-4a7ae8af1ca0",
      "comment": "",
      "command": "click",
      "target": "css=.newUser",
      "targets": [
        ["css=.newUser", "css:finder"],
        ["xpath=//a[contains(text(),'Join Now!')]", "xpath:link"],
        ["xpath=//a[contains(@href, '/sign-up.shtml')]", "xpath:href"],
        ["xpath=//div/a[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "cb8d6949-34c5-4e60-a90a-cd328f70c49b",
      "comment": "",
      "command": "click",
      "target": "id=title",
      "targets": [
        ["id=title", "id"],
        ["name=map(title)", "name"],
        ["css=#title", "css:finder"],
        ["xpath=//select[@id='title']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/select", "xpath:idRelative"],
        ["xpath=//select", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "6e072967-1200-41f1-83b6-8f77ede81995",
      "comment": "",
      "command": "select",
      "target": "id=title",
      "targets": [],
      "value": "label=Mr"
    }, {
      "id": "93d80860-5131-4543-ba72-9312d1ea6419",
      "comment": "",
      "command": "click",
      "target": "id=forename",
      "targets": [
        ["id=forename", "id"],
        ["name=map(firstName)", "name"],
        ["css=#forename", "css:finder"],
        ["xpath=//input[@id='forename']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input", "xpath:idRelative"],
        ["xpath=//fieldset/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "f5334ff1-39ae-45d9-a77b-88d0629d0397",
      "comment": "",
      "command": "type",
      "target": "id=forename",
      "targets": [
        ["id=forename", "id"],
        ["name=map(firstName)", "name"],
        ["css=#forename", "css:finder"],
        ["xpath=//input[@id='forename']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input", "xpath:idRelative"],
        ["xpath=//fieldset/input", "xpath:position"]
      ],
      "value": "Nathan"
    }, {
      "id": "fc5eb614-22f7-486e-88cb-778b75d5060f",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(1)",
      "targets": [
        ["css=fieldset:nth-child(1)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset", "xpath:idRelative"],
        ["xpath=//fieldset", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "f2213969-fa57-4199-a139-d169254ea634",
      "comment": "",
      "command": "click",
      "target": "name=map(lastName)",
      "targets": [
        ["name=map(lastName)", "name"],
        ["css=fieldset:nth-child(1) > .required:nth-child(7)", "css:finder"],
        ["xpath=//input[@name='map(lastName)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[2]", "xpath:idRelative"],
        ["xpath=//input[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "e90f0ee6-6935-4df2-ac8f-f738a00e4750",
      "comment": "",
      "command": "type",
      "target": "name=map(lastName)",
      "targets": [
        ["name=map(lastName)", "name"],
        ["css=.valid:nth-child(7)", "css:finder"],
        ["xpath=//input[@name='map(lastName)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[2]", "xpath:idRelative"],
        ["xpath=//input[2]", "xpath:position"]
      ],
      "value": "Ojuolape"
    }, {
      "id": "770227f2-bc2d-472f-bbb0-aabfc1e46912",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(1)",
      "targets": [
        ["css=fieldset:nth-child(1)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset", "xpath:idRelative"],
        ["xpath=//fieldset", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "f9d8ede3-4f11-4721-8834-4da0e9326eff",
      "comment": "",
      "command": "click",
      "target": "id=dobDay",
      "targets": [
        ["id=dobDay", "id"],
        ["name=map(dobDay)", "name"],
        ["css=#dobDay", "css:finder"],
        ["xpath=//select[@id='dobDay']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/select[2]", "xpath:idRelative"],
        ["xpath=//select[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "13cc421f-1a84-4fc1-8bd3-8a018a7e36d2",
      "comment": "",
      "command": "select",
      "target": "id=dobDay",
      "targets": [],
      "value": "label=14"
    }, {
      "id": "7a2cf693-65ed-4562-8f51-9ab3bf755879",
      "comment": "",
      "command": "click",
      "target": "id=dobMonth",
      "targets": [
        ["id=dobMonth", "id"],
        ["name=map(dobMonth)", "name"],
        ["css=#dobMonth", "css:finder"],
        ["xpath=//select[@id='dobMonth']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/select[3]", "xpath:idRelative"],
        ["xpath=//select[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "9cac7d17-aa99-46d6-b5f4-7a9b9814d4c1",
      "comment": "",
      "command": "select",
      "target": "id=dobMonth",
      "targets": [],
      "value": "label=October"
    }, {
      "id": "8db8c3f9-6db4-41e7-8f0c-44c940f009ef",
      "comment": "",
      "command": "click",
      "target": "id=dobYear",
      "targets": [
        ["id=dobYear", "id"],
        ["name=map(dobYear)", "name"],
        ["css=#dobYear", "css:finder"],
        ["xpath=//select[@id='dobYear']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/select[4]", "xpath:idRelative"],
        ["xpath=//select[4]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "541e67b1-6fa1-4deb-8fa2-77ab533043cf",
      "comment": "",
      "command": "select",
      "target": "id=dobYear",
      "targets": [],
      "value": "label=1986"
    }, {
      "id": "0da2850e-de6b-465b-b09d-403827cfed41",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(1)",
      "targets": [
        ["css=fieldset:nth-child(1)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset", "xpath:idRelative"],
        ["xpath=//fieldset", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "f8cc0920-51eb-4ccf-a47a-1f617c15f5d1",
      "comment": "",
      "command": "click",
      "target": "name=map(email)",
      "targets": [
        ["name=map(email)", "name"],
        ["css=fieldset:nth-child(1) > .required:nth-child(13)", "css:finder"],
        ["xpath=//input[@name='map(email)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[3]", "xpath:idRelative"],
        ["xpath=//input[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "24bc80e3-997f-4d80-b686-11ac300fd284",
      "comment": "",
      "command": "type",
      "target": "name=map(email)",
      "targets": [
        ["name=map(email)", "name"],
        ["css=.valid:nth-child(13)", "css:finder"],
        ["xpath=//input[@name='map(email)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[3]", "xpath:idRelative"],
        ["xpath=//input[3]", "xpath:position"]
      ],
      "value": "nathan_oj@outlook.com"
    }, {
      "id": "cc286675-aab3-4519-9849-a84ee0fa4bf8",
      "comment": "",
      "command": "click",
      "target": "name=map(phone)",
      "targets": [
        ["name=map(phone)", "name"],
        ["css=.telephoneNumber", "css:finder"],
        ["xpath=//input[@name='map(phone)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[4]", "xpath:idRelative"],
        ["xpath=//input[4]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "37f8b900-d6a3-4c34-adb2-0d005d6b4412",
      "comment": "",
      "command": "type",
      "target": "name=map(phone)",
      "targets": [
        ["name=map(phone)", "name"],
        ["css=.telephoneNumber", "css:finder"],
        ["xpath=//input[@name='map(phone)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[4]", "xpath:idRelative"],
        ["xpath=//input[4]", "xpath:position"]
      ],
      "value": "07470365012"
    }, {
      "id": "48e2dad0-0c5a-41b0-9c81-b7404f905f1f",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(1)",
      "targets": [
        ["css=fieldset:nth-child(1)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset", "xpath:idRelative"],
        ["xpath=//fieldset", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "2a3207ee-03d9-41d9-999c-58d0ea005684",
      "comment": "",
      "command": "click",
      "target": "name=map(mobile)",
      "targets": [
        ["name=map(mobile)", "name"],
        ["css=.mobileNumber", "css:finder"],
        ["xpath=//input[@name='map(mobile)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[5]", "xpath:idRelative"],
        ["xpath=//input[5]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "1585bd6c-11bc-459b-8b77-4d88ed28897d",
      "comment": "",
      "command": "type",
      "target": "name=map(mobile)",
      "targets": [
        ["name=map(mobile)", "name"],
        ["css=.mobileNumber", "css:finder"],
        ["xpath=//input[@name='map(mobile)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset/input[5]", "xpath:idRelative"],
        ["xpath=//input[5]", "xpath:position"]
      ],
      "value": "07470365012"
    }, {
      "id": "1f37b533-c169-403e-b417-771667e192b3",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(1)",
      "targets": [
        ["css=fieldset:nth-child(1)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset", "xpath:idRelative"],
        ["xpath=//fieldset", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "63f697c3-5858-4ec2-91cf-72d81618904a",
      "comment": "",
      "command": "click",
      "target": "name=map(currency)",
      "targets": [
        ["name=map(currency)", "name"],
        ["css=.required:nth-child(2)", "css:finder"],
        ["xpath=//select[@name='map(currency)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[4]/select", "xpath:idRelative"],
        ["xpath=//fieldset[4]/select", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "8a6c6ff1-3940-4d6b-970c-26abd90c208e",
      "comment": "",
      "command": "select",
      "target": "name=map(currency)",
      "targets": [],
      "value": "label=Pounds Sterling"
    }, {
      "id": "25e262a1-def7-4a46-bbe4-b72a2758b993",
      "comment": "",
      "command": "click",
      "target": "name=map(address1)",
      "targets": [
        ["name=map(address1)", "name"],
        ["css=.full:nth-child(3)", "css:finder"],
        ["xpath=//input[@name='map(address1)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "04cfaddd-d443-4337-a8ed-865765084c73",
      "comment": "",
      "command": "type",
      "target": "name=map(address1)",
      "targets": [
        ["name=map(address1)", "name"],
        ["css=.full:nth-child(3)", "css:finder"],
        ["xpath=//input[@name='map(address1)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input", "xpath:position"]
      ],
      "value": "13 matthews close"
    }, {
      "id": "50c02bb2-48b2-4a48-8f43-d68c973eea2d",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(2) > label:nth-child(2)",
      "targets": [
        ["css=fieldset:nth-child(2) > label:nth-child(2)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/label", "xpath:idRelative"],
        ["xpath=//fieldset[2]/label", "xpath:position"],
        ["xpath=//label[contains(.,'Address Line 1: *')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "0abc8567-f5a1-4405-af0e-745b7569ab8d",
      "comment": "",
      "command": "click",
      "target": "name=map(address2)",
      "targets": [
        ["name=map(address2)", "name"],
        ["css=.full:nth-child(5)", "css:finder"],
        ["xpath=//input[@name='map(address2)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[2]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "d2d3d276-ea42-44f3-9cc2-5d343debfa1e",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(2) > label:nth-child(4)",
      "targets": [
        ["css=fieldset:nth-child(2) > label:nth-child(4)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/label[2]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/label[2]", "xpath:position"],
        ["xpath=//label[contains(.,'Address 2')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "a25e9ffc-1e6a-465a-bcf4-30bc3396084a",
      "comment": "",
      "command": "click",
      "target": "name=map(addressCity)",
      "targets": [
        ["name=map(addressCity)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(7)", "css:finder"],
        ["xpath=//input[@name='map(addressCity)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[3]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "9268584f-896c-4efa-9bc7-3a31eced4721",
      "comment": "",
      "command": "type",
      "target": "name=map(addressCity)",
      "targets": [
        ["name=map(addressCity)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(7)", "css:finder"],
        ["xpath=//input[@name='map(addressCity)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[3]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[3]", "xpath:position"]
      ],
      "value": "Romford"
    }, {
      "id": "6a49ea4f-31c0-48ba-ad76-f7cc93824478",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(2) > label:nth-child(6)",
      "targets": [
        ["css=fieldset:nth-child(2) > label:nth-child(6)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/label[3]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/label[3]", "xpath:position"],
        ["xpath=//label[contains(.,'City: *')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "a4ab349a-fbaf-406a-ad58-d16e9682b66f",
      "comment": "",
      "command": "click",
      "target": "name=map(stateProv)",
      "targets": [
        ["name=map(stateProv)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(9)", "css:finder"],
        ["xpath=//input[@name='map(stateProv)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[4]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[4]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "87871f60-3c73-4b66-a1da-1889bbf10f14",
      "comment": "",
      "command": "type",
      "target": "name=map(stateProv)",
      "targets": [
        ["name=map(stateProv)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(9)", "css:finder"],
        ["xpath=//input[@name='map(stateProv)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[4]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[4]", "xpath:position"]
      ],
      "value": "ESSEX"
    }, {
      "id": "e3339e49-4b51-46fe-95d1-65877249f180",
      "comment": "",
      "command": "click",
      "target": "css=fieldset:nth-child(2)",
      "targets": [
        ["css=fieldset:nth-child(2)", "css:finder"],
        ["xpath=//form[@id='signupForm']/fieldset[2]", "xpath:idRelative"],
        ["xpath=//fieldset[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "dd159f73-4ad5-4f0a-b243-417fdc64fd9e",
      "comment": "",
      "command": "click",
      "target": "name=map(postCode)",
      "targets": [
        ["name=map(postCode)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(11)", "css:finder"],
        ["xpath=//input[@name='map(postCode)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[5]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[5]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "ac48d3d6-a893-4cd5-9755-04f1933fb1c0",
      "comment": "",
      "command": "type",
      "target": "name=map(postCode)",
      "targets": [
        ["name=map(postCode)", "name"],
        ["css=fieldset:nth-child(2) > .required:nth-child(11)", "css:finder"],
        ["xpath=//input[@name='map(postCode)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/input[5]", "xpath:idRelative"],
        ["xpath=//fieldset[2]/input[5]", "xpath:position"]
      ],
      "value": "RM3 0DN"
    }, {
      "id": "b34f2b2d-2b88-46c1-ac0d-eef31c2fb964",
      "comment": "",
      "command": "click",
      "target": "id=countryList",
      "targets": [
        ["id=countryList", "id"],
        ["name=map(countryCode)", "name"],
        ["css=#countryList", "css:finder"],
        ["xpath=//select[@id='countryList']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[2]/select", "xpath:idRelative"],
        ["xpath=//fieldset[2]/select", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "42b7ab13-d0ea-4b3c-9888-5239c3b9d12c",
      "comment": "",
      "command": "select",
      "target": "id=countryList",
      "targets": [],
      "value": "label=UNITED KINGDOM"
    }, {
      "id": "38205d81-16fb-44a5-b9a9-26f0f872b14b",
      "comment": "",
      "command": "click",
      "target": "name=map(userName)",
      "targets": [
        ["name=map(userName)", "name"],
        ["css=fieldset:nth-child(3) > .required:nth-child(3)", "css:finder"],
        ["xpath=//input[@name='map(userName)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "11628a8c-4c27-436f-b103-aa764d172893",
      "comment": "",
      "command": "type",
      "target": "name=map(userName)",
      "targets": [
        ["name=map(userName)", "name"],
        ["css=fieldset:nth-child(3) > .valid", "css:finder"],
        ["xpath=//input[@name='map(userName)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input", "xpath:position"]
      ],
      "value": "nathan007"
    }, {
      "id": "fc7d1658-cb46-4881-8c4f-30f4f1097ac9",
      "comment": "",
      "command": "click",
      "target": "id=password",
      "targets": [
        ["id=password", "id"],
        ["css=#password", "css:finder"],
        ["xpath=//input[@id='password']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[2]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "84be550e-3c39-4cca-8d97-4aa5109ed948",
      "comment": "",
      "command": "type",
      "target": "id=password",
      "targets": [
        ["id=password", "id"],
        ["css=#password", "css:finder"],
        ["xpath=//input[@id='password']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[2]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[2]", "xpath:position"]
      ],
      "value": "Nattynat1"
    }, {
      "id": "6af3181d-004f-489e-a4e7-a9b6f5d4eb98",
      "comment": "",
      "command": "type",
      "target": "name=map(passwordConfirm)",
      "targets": [
        ["name=map(passwordConfirm)", "name"],
        ["css=.autocomplete-off:nth-child(9)", "css:finder"],
        ["xpath=//input[@name='map(passwordConfirm)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[3]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[3]", "xpath:position"]
      ],
      "value": "Nattynat1"
    }, {
      "id": "029d61a5-b55e-4ea1-b337-9e9b2d12a420",
      "comment": "",
      "command": "click",
      "target": "id=securityQuestionOne",
      "targets": [
        ["id=securityQuestionOne", "id"],
        ["name=map(securityQuestionOne)", "name"],
        ["css=#securityQuestionOne", "css:finder"],
        ["xpath=//select[@id='securityQuestionOne']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/select", "xpath:idRelative"],
        ["xpath=//fieldset[3]/select", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "b8226796-926d-476f-ace5-98ddd370bf5d",
      "comment": "",
      "command": "select",
      "target": "id=securityQuestionOne",
      "targets": [],
      "value": "label=Who was your childhood hero?"
    }, {
      "id": "5eb76bff-ed2e-4347-97a2-88978adcf227",
      "comment": "",
      "command": "click",
      "target": "name=map(securityAnswerOne)",
      "targets": [
        ["name=map(securityAnswerOne)", "name"],
        ["css=fieldset:nth-child(3) > .required:nth-child(14)", "css:finder"],
        ["xpath=//input[@name='map(securityAnswerOne)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[4]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[4]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "f84ac0eb-3c73-44a6-9dae-fbe21758b3b4",
      "comment": "",
      "command": "type",
      "target": "name=map(securityAnswerOne)",
      "targets": [
        ["name=map(securityAnswerOne)", "name"],
        ["css=.valid:nth-child(14)", "css:finder"],
        ["xpath=//input[@name='map(securityAnswerOne)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[4]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[4]", "xpath:position"]
      ],
      "value": "Goku"
    }, {
      "id": "5b255026-c2c9-43f5-b173-a1cc4ee05117",
      "comment": "",
      "command": "click",
      "target": "id=securityQuestionTwo",
      "targets": [
        ["id=securityQuestionTwo", "id"],
        ["name=map(securityQuestionTwo)", "name"],
        ["css=#securityQuestionTwo", "css:finder"],
        ["xpath=//select[@id='securityQuestionTwo']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/select[2]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/select[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "b5a959bf-5c72-4893-a806-7f19577a5947",
      "comment": "",
      "command": "select",
      "target": "id=securityQuestionTwo",
      "targets": [],
      "value": "label=Where were you born?"
    }, {
      "id": "4d9bb6fc-a2e3-42f0-b743-985fba02c2b0",
      "comment": "",
      "command": "click",
      "target": "name=map(securityAnswerTwo)",
      "targets": [
        ["name=map(securityAnswerTwo)", "name"],
        ["css=.required:nth-child(18)", "css:finder"],
        ["xpath=//input[@name='map(securityAnswerTwo)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[5]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[5]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "991dcd12-79e8-4bc0-a343-ff117901ebbd",
      "comment": "",
      "command": "type",
      "target": "name=map(securityAnswerTwo)",
      "targets": [
        ["name=map(securityAnswerTwo)", "name"],
        ["css=.required:nth-child(18)", "css:finder"],
        ["xpath=//input[@name='map(securityAnswerTwo)']", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[3]/input[5]", "xpath:idRelative"],
        ["xpath=//fieldset[3]/input[5]", "xpath:position"]
      ],
      "value": "Pluto"
    }, {
      "id": "d254f074-b1dd-49c7-85c8-b0dbe8163443",
      "comment": "",
      "command": "click",
      "target": "name=map(terms)",
      "targets": [
        ["name=map(terms)", "name"],
        ["xpath=(//input[@id='checkbox'])[3]", "xpath:attributes"],
        ["xpath=//form[@id='signupForm']/fieldset[5]/input[3]", "xpath:idRelative"],
        ["xpath=//fieldset[5]/input[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "2cd4783d-3270-4232-a340-da840e56515a",
      "comment": "",
      "command": "click",
      "target": "id=form",
      "targets": [],
      "value": ""
    }]
  }],
  "suites": [{
    "id": "003e87c5-0315-44f5-88f6-432bd84987a5",
    "name": "Default Suite",
    "persistSession": false,
    "parallel": false,
    "timeout": 300,
    "tests": ["564716b8-d087-4688-8fb0-6b12c6fc3922"]
  }],
  "urls": ["https://moneygaming.qa.gameaccount.com/"],
  "plugins": []
}