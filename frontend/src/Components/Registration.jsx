import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Header from "./Header";
import $ from "jquery";
import CryptoJS from "crypto-js";

function Registration() {
  const [employmentCategory, setEmploymentCategory] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [oldEmploymentRefNo, setOldEmploymentRefNo] = useState(null);
  const [appellation, setAppellation] = useState("");
  const [fullName, setFullName] = useState(null);
  const [shortName, setShortName] = useState(null);
  const [suffix, setSuffix] = useState("");
  const [dOB, setDOB] = useState(null);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [center, setCenter] = useState("");
  const [dealingOffice, setDealingOffice] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [empClass, setEmpClass] = useState("");
  const [panCard, setPanCard] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [emailAddress, setEmilId] = useState(null);

  
  var encryptedBase64Key = "bXVzdGJlMTZieXRlc2tleQ==";
  var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
  // console.log("parsedBase64Key "+ parsedBase64Key)
  var encryptedData = null;
  // console.warn(employmentCategory, isExsitingEmployee, employmentType, appellation, fullName,shortName,suffix,dOB,gender,nationality,center
  // ,dealingOffice,department,designation,empClass,panCard,mobileNumber,emailAddress);
// console.log(encrypt(employmentCategory).toString())
const registerEmployee=(e)=>{
  e.preventDefault();
  const user = {
    employeeCategory: encrypt(employmentCategory).toString(),
    // isExistingEmp: encrypt(isExsitingEmployee).toString(),
    lastEmploymentType: encrypt(employmentType).toString(),
    oldEmploymentRefNo: encrypt(oldEmploymentRefNo).toString(),
    appellation: encrypt(appellation).toString(),
    fullName: encrypt(fullName).toString(),
    shortName: encrypt(shortName).toString(),
    suffix: encrypt(suffix).toString(),
    dateOfBirth: (dOB),
    gender: encrypt(gender).toString(),
    nationality: encrypt(nationality).toString(),
    center: encrypt(center).toString(),
    DealingOfficeEstablishment: encrypt(dealingOffice).toString(),
    department: encrypt(department).toString(),
    designation: encrypt(designation).toString(),
    empClass: encrypt(empClass).toString(),
    panCard: encrypt(panCard),
    mobileNumber: encrypt(mobileNumber).toString(),
    emailId: encrypt(emailAddress).toString(),
  };
  console.log(user);
  fetch("http://localhost:8080/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body:JSON.stringify(user),
  }).then((res) => {
    if (res.status === 200) {
      alert("Regitration Complete...");
      //navigate(`/Signin`);
    } else {
      alert("Please Fill Required Fields.");
    }
  });
};

   

  function encrypt(plaintText) {
    // this is Base64-encoded encrypted data
    encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encryptedData;
  }
  // function encryptBK() {
  //   var plaintText = "Hello World";
  // // console.log( "plaintText = " + plaintText );

  // // this is Base64-encoded encrypted data
  // encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {mode: CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  // console.log( "encryptedData = " + encryptedData );
  // }

  function decrypt() {
    var encryptedCipherText = "MxhyNGUa1CHEm1ewmXALfH2tYGgbX5D0jJdLZimnycA="; // or encryptedData;
    // var encryptedCipherText = encryptedData;
    var decryptedData = CryptoJS.AES.decrypt(
      encryptedCipherText,
      parsedBase64Key,
      { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );
    // console.log( "DecryptedData = " + decryptedData );

    // this is the decrypted data as a string
    var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    // console.log( "DecryptedText = " + decryptedText );
  }

  function togglePasswordVisibility() {
    var x = document.getElementById("strPANNumber");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function validatePanCardNumber() {
    var values = $("#strPANNumber").val().toUpperCase();
    var regex1 = /^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G)[A-Z]{1}\d{4}[A-Z]{1}$/;
    if (regex1.test(values)) {
      return true;
    } else {
      alert(
        "Please enter valid PAN Card Number!\n\nIndian PAN is as follows: AAAAA9999A\n\nWhere first five characters are letters, next 4 are numerals and last character is letter.\n\nOne rule there - the fourth character is choosen from a list alphabates as below - \n\nC - Company \nP - Person \nH - HUF(Hindu Undivided Family) \nF - Firm \nA - Association of Persons (AOP) \nT - AOP (Trust) \nB - Body of Individuals (BOI) \nL - Local Authority \nJ - Artificial Juridical Person \nG - Government"
      );
      return false;
    }
  }

  function validateDate() {
    var values = $("#dateOfBirth").val();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values)) {
      return -1;
    }
    let parts = values.split("-");
    let now = new Date();
    let year = parseInt(parts[0], 10);
    let currentYear = now.getFullYear();
    // let month = ( parts[1][0] === '0') ? parseInt(parts[1][1], 10) : parseInt(parts[1], 10);
    // let day = ( parts[2][0] === '0') ? parseInt(parts[2][1], 10) : parseInt(parts[2], 10);

    if (
      currentYear - year < 18 ||
      currentYear - year > 80 ||
      year >= currentYear
    ) {
      alert("Sorry, only persons over the age of 18 may register");
    }
    return 0;
  }

  function validateMobileNumber() {
    var mobileNumber = $("#mobileNumber").val();
    var r = /^[6789]\d{9}$/;
    if (!r.test(mobileNumber)) {
      alert(
        "Mobile numbers should begin with 6,7, 8, or 9 and be 10 digits long."
      );
    }
  }

  function prepareShortName() {
    let fullName = $("#fullName").val();
    let splitedName = fullName.split(" ");
    let shortName =
      splitedName[0].charAt(0).toUpperCase() +
      " " +
      splitedName[splitedName.length - 1];
    $("#shortName").val(shortName.toUpperCase());
    return shortName.toUpperCase();
  }
  return (
    <div>
      <Header />
      <div className="pageBackGround">
        <div className="pageTitle">
          <h1 className="heading1">
            <i className="bi bi-person-fill-add"></i> Member Registration
          </h1>
        </div>
        <form>
          <div className="container-fluid mt-5 ">
            <div className="row mt-5">
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="employmentCategory" className="form-label">
                  Employment Category: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Employment Category" arrow placement="right">
                  <select
                    className="form-select"
                    id="employmentCategory"
                    required
                    value={employmentCategory}
                    onChange={(e) => setEmploymentCategory(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="Adhoc">Adhoc</option>
                    <option value="Contractual">Contractual</option>
                    <option value="Deputation">Deputation</option>
                    <option value="Tenure">Tenure</option>
                    <option value="Permanent">Permanent</option>
                  </select>
                </Tooltip>
              </div>
{/* <Footer/> 
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="isExsitingEmployee" className="form-label">
                  is Existing Employee. ?
                </label>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title=" is Exesting Employee?" arrow placement="top">
                  <input
                    className="form-control-input"
                    type="checkbox"
                    value={isExsitingEmployee}
                    onChange={(e) => setIsExsitingEmployee(e.target.checked)}
                    id="isExsitingEmployee"
                  />
                </Tooltip>
              </div>
              */}
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="lastEmploymentType" className="form-label">
                  Last Employment Type: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Employment Category" arrow placement="right">
                  <select
                    className="form-select"
                    id="employmentType"
                    required
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="Contractual">Contractual</option>
                    <option value="Fresh">Fresh</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Student">Student</option>
                    <option value="Tenure">Tenure</option>
                  </select>
                </Tooltip>
              </div>
  
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label className="form-label" htmlFor="oldEmploymentRefNo">
                  Old Employment Ref. No.
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip
                  title=" Old Employment Ref. No."
                  arrow
                  placement="right"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="oldEmploymentRefNo"
                    placeholder="Old Employment Ref. No."
                    value={oldEmploymentRefNo}
                    onChange={(e) => setOldEmploymentRefNo(e.target.value)}
                  />
                </Tooltip>
                {/* 
                <div className="mt-1">
                  <Tooltip
                    title="Fetch the Default values of Old Emp No."
                    arrow
                    placement="right"
                  >
                    <input
                      id="fetchDefaultValue"
                      className="form-control-input"
                      type="checkbox"
                    />
                    <p className="label">
                      Fetch the Default values of Old Emp No.
                    </p>
                  </Tooltip>
                </div>*/}
              </div>
              
              <div className="col-sm-6 col-md-3 col-xl-2 mb-2">
                <label className="form-label">
                  Appellation: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Appellation" arrow placement="top">
                  <select
                    className="form-select"
                    required
                    value={appellation}
                    onChange={(e) => setAppellation(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="Dr.">Dr.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms">Ms</option>
                    <option value="N/A">N/A</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="fullName" className="form-label">
                  Full Name: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Full Name" arrow placement="left">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                    onBlur={prepareShortName}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="shortName" className="form-label">
                  Short Name: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Short Name" arrow placement="right">
                  <input
                    type="text"
                    className="form-control"
                    id="shortName"
                    placeholder="Short Name"
                    onFocus={(e) => setShortName(e.target.value)}
                    value={shortName}
                    required
                  />
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label className="form-label" htmlFor="suffix">
                  Suffix:
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Suffix" arrow placement="top">
                  <select
                    className="form-select"
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="BDS">BDS</option>
                    <option value="IAS">IAS</option>
                    <option value="IFS">IFS</option>
                    <option value="IPS">IPS</option>
                    <option value="MBBS">MBBS</option>
                    <option value="MD">MD</option>
                    <option value="MDS">MDS</option>
                    <option value="MS">MS</option>
                    <option value="None">None</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label className="form-label" htmlFor="dateOfBirth">
                  Date of Birth: <sup className="text-danger">*</sup>
                </label>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Date of Birth" arrow placement="left">
                  <div className="datepicker">
                    <input
                      type="date"
                      id="dateOfBirth"
                      className="form-control"
                      value={dOB}
                      onChange={(e) => setDOB(e.target.value)}
                      onBlur={validateDate}
                      required
                    />
                  </div>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label className="form-label">
                  Gender <sup className="text-danger">*</sup>
                </label>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Gender" arrow placement="right">
                  <select
                    className="form-select"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="N/A">N/A</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label className="form-label">
                  Nationality <sup className="text-danger">*</sup>
                </label>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Nationality" arrow placement="top">
                  <select
                    className="form-select"
                    required
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="13">Afghani</option>
                    <option value="16">Albanian</option>
                    <option value="66">Algerian</option>
                    <option value="222">American</option>
                    <option value="3">Andorran</option>
                    <option value="18">Angolan</option>
                    <option value="15">Anguillan</option>
                    <option value="19">Antarctic</option>
                    <option value="14">Antiguan</option>
                    <option value="20">Argentine</option>
                    <option value="17">Armenian</option>
                    <option value="23">Arubian</option>
                    <option value="2">Australian</option>
                    <option value="22">Austrian</option>
                    <option value="25">Azerbaijani</option>
                    <option value="39">Bahameese</option>
                    <option value="31">Bahrainian</option>
                    <option value="4">Bangladeshi</option>
                    <option value="27">Barbadian</option>
                    <option value="34">Barthlemois</option>
                    <option value="42">Belarusian</option>
                    <option value="28">Belgian</option>
                    <option value="43">Belizean</option>
                    <option value="33">Beninese</option>
                    <option value="35">Bermudan</option>
                    <option value="40">Bhutanese</option>
                    <option value="37">Bolivian</option>
                    <option value="26">Bosnian</option>
                    <option value="38">Brazilian</option>
                    <option value="80">British</option>
                    <option value="36">Bruneian</option>
                    <option value="30">Bulgarian</option>
                    <option value="29">Burkinabe</option>
                    <option value="32">Burundian</option>
                    <option value="112">Cambodian</option>
                    <option value="52">Cameroonian</option>
                    <option value="5">Canadian</option>
                    <option value="57">Cape Verdean</option>
                    <option value="119">Caymanian</option>
                    <option value="46">Central African</option>
                    <option value="206">Chadian</option>
                    <option value="51">Chilean</option>
                    <option value="53">Chinese</option>
                    <option value="59">Christmas Islander</option>
                    <option value="44">Cocossian</option>
                    <option value="54">Colombian</option>
                    <option value="114">Comoran</option>
                    <option value="45">Congolese</option>
                    <option value="50">Cook Islander</option>
                    <option value="55">Costa Rican</option>
                    <option value="97">Croatian</option>
                    <option value="56">Cuban</option>
                    <option value="58">Curaaoan</option>
                    <option value="60">Cypriot</option>
                    <option value="61">Czech</option>
                    <option value="64">Danish</option>
                    <option value="63">Djiboutian</option>
                    <option value="6">Dominican</option>
                    <option value="160">Dutch</option>
                    <option value="67">Ecuadorean</option>
                    <option value="12">Emirian</option>
                    <option value="90">Equatorial Guinean</option>
                    <option value="70">Eritrean</option>
                    <option value="68">Estonian</option>
                    <option value="72">Ethiopian</option>
                    <option value="75">Falkland Islander</option>
                    <option value="77">Faroese</option>
                    <option value="74">Fijian</option>
                    <option value="171">Filipino</option>
                    <option value="73">Finnish</option>
                    <option value="78">French</option>
                    <option value="83">French Guianese</option>
                    <option value="10">Frenchman</option>
                    <option value="169">French Polynesian</option>
                    <option value="79">Gabonese</option>
                    <option value="87">Gambian</option>
                    <option value="82">Georgian</option>
                    <option value="11">German</option>
                    <option value="84">Ghanaian</option>
                    <option value="85">Gibraltarian</option>
                    <option value="8">Greek</option>
                    <option value="86">Greenlander</option>
                    <option value="81">Grenadian</option>
                    <option value="89">Guadeloupean</option>
                    <option value="92">Guamanian</option>
                    <option value="91">Guatemalan</option>
                    <option value="88">Guinean</option>
                    <option value="94">Guyanese</option>
                    <option value="98">Haitian</option>
                    <option value="96">Honduran</option>
                    <option value="95">Hong Konger</option>
                    <option value="9">Hungarian</option>
                    <option value="105">Icelander</option>
                    <option value="113">I-Kiribati</option>
                    <option value="1">Indian</option>
                    <option value="99">Indonesian</option>
                    <option value="104">Iranian</option>
                    <option value="103">Iraqi</option>
                    <option value="100">Irish</option>
                    <option value="101">Israeli</option>
                    <option value="106">Italian</option>
                    <option value="49">Ivorian</option>
                    <option value="107">Jamaican</option>
                    <option value="109">Japanese</option>
                    <option value="108">Jordanian</option>
                    <option value="120">Kazakhstani</option>
                    <option value="110">Kenyan</option>
                    <option value="115">Kittian</option>
                    <option value="118">Kuwaiti</option>
                    <option value="111">Kyrgyzstani</option>
                    <option value="24">landic</option>
                    <option value="121">Laotian</option>
                    <option value="130">Latvian</option>
                    <option value="122">Lebanese</option>
                    <option value="126">Liberian</option>
                    <option value="131">Libyan</option>
                    <option value="124">Liechtensteiner</option>
                    <option value="128">Lithunian</option>
                    <option value="129">Luxembourger</option>
                    <option value="142">Macanese</option>
                    <option value="138">Macedonian</option>
                    <option value="234">Mahoran</option>
                    <option value="136">Malagasy</option>
                    <option value="150">Malawian</option>
                    <option value="152">Malaysian</option>
                    <option value="149">Maldivan</option>
                    <option value="139">Malian</option>
                    <option value="147">Maltese</option>
                    <option value="102">Manx</option>
                    <option value="137">Marshallese</option>
                    <option value="144">Martinican</option>
                    <option value="145">Mauritanian</option>
                    <option value="148">Mauritian</option>
                    <option value="151">Mexican</option>
                    <option value="76">Micronesian</option>
                    <option value="134">Moldovan</option>
                    <option value="133">Monacan</option>
                    <option value="141">Mongolian</option>
                    <option value="135">Montenegrin</option>
                    <option value="146">Montserratian</option>
                    <option value="132">Moroccan</option>
                    <option value="127">Mosotho</option>
                    <option value="41">Motswana</option>
                    <option value="153">Mozambican</option>
                    <option value="140">Myanmarese</option>
                    <option value="154">Namibian</option>
                    <option value="163">Nauruan</option>
                    <option value="162">Nepalese</option>
                    <option value="155">New Caledonian</option>
                    <option value="165">New Zealander</option>
                    <option value="159">Nicaraguan</option>
                    <option value="158">Nigerian</option>
                    <option value="156">Nigerien</option>
                    <option value="164">Niuean</option>
                    <option value="230">Ni-Vanuatu</option>
                    <option value="157">Norfolk Islander</option>
                    <option value="143">Northern Mariana Islander</option>
                    <option value="116">North Korean</option>
                    <option value="161">Norwegian</option>
                    <option value="166">Omani</option>
                    <option value="172">Pakistani</option>
                    <option value="179">Palauan</option>
                    <option value="177">Palestinian</option>
                    <option value="167">Panamanian</option>
                    <option value="170">Papua New Guinean</option>
                    <option value="180">Paraguayan</option>
                    <option value="168">Peruvian</option>
                    <option value="175">Pitcairn Islander</option>
                    <option value="173">Polish</option>
                    <option value="178">Portuguese</option>
                    <option value="176">Puerto Rican</option>
                    <option value="181">Qatari</option>
                    <option value="182">Romanian</option>
                    <option value="184">Russian</option>
                    <option value="185">Rwandan</option>
                    <option value="192">Saint Helenian</option>
                    <option value="123">Saint Lucian</option>
                    <option value="174">Saint-Pierrais</option>
                    <option value="225">Saint Vincentian</option>
                    <option value="202">Salvadorean</option>
                    <option value="232">Samoan</option>
                    <option value="196">Sanmarinese</option>
                    <option value="186">Saudi Arabian</option>
                    <option value="197">Senegalese</option>
                    <option value="183">Serbian</option>
                    <option value="188">Seychellois</option>
                    <option value="195">Sierra Leonean</option>
                    <option value="191">Singaporean</option>
                    <option value="194">Slovakian</option>
                    <option value="193">Slovenian</option>
                    <option value="187">Solomon Islander</option>
                    <option value="198">Somali</option>
                    <option value="201">So Tomean</option>
                    <option value="235">South African</option>
                    <option value="117">South Korean</option>
                    <option value="71">Spanish</option>
                    <option value="125">Sri Lankan</option>
                    <option value="189">Sudanese</option>
                    <option value="199">Surinamer</option>
                    <option value="204">Swazi</option>
                    <option value="190">Swedish</option>
                    <option value="48">Swiss</option>
                    <option value="203">Syrian</option>
                    <option value="218">Taiwanese</option>
                    <option value="209">Tajikistani</option>
                    <option value="219">Tanzanian</option>
                    <option value="208">Thai</option>
                    <option value="211">Timorese</option>
                    <option value="207">Togolese</option>
                    <option value="210">Tokelauan</option>
                    <option value="214">Tongan</option>
                    <option value="216">Trinidadian</option>
                    <option value="213">Tunisian</option>
                    <option value="215">Turkish</option>
                    <option value="212">Turkmen</option>
                    <option value="205">Turks and Caicos Islander</option>
                    <option value="217">Tuvaluan</option>
                    <option value="221">Ugandan</option>
                    <option value="220">Ukrainian</option>
                    <option value="223">Uruguayan</option>
                    <option value="224">Uzbekistani</option>
                    <option value="226">Venezuelan</option>
                    <option value="229">Vietnamese</option>
                    <option value="227">Virgin Islander</option>
                    <option value="231">Wallisian</option>
                    <option value="69">Western Saharan</option>
                    <option value="233">Yemeni</option>
                    <option value="236">Zambian</option>
                    <option value="237">Zimbabwean</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="center" className="form-label">
                  Center <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Center" arrow placement="left">
                  <select
                    className="form-select"
                    required
                    value={center}
                    onChange={(e) => setCenter(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="101">
                      All India Institute Of Medical Sciences
                    </option>
                    <option value="111">Cardio and Neuro Centre</option>
                    <option value="109">
                      Cardio-Thoracic Sciences Centre-AIIMS
                    </option>
                    <option value="102">
                      Centre htmlFor Dental Education and Research
                    </option>
                    <option value="106">
                      Comprehensive Rural Health Services Project, Ballabhgarh
                    </option>
                    <option value="103">
                      Dr. BR Ambedkar Institute Rotary Cancer Hospital
                    </option>
                    <option value="104">
                      Dr. Rajendra Prasad Centre htmlFor Ophthalmic Science
                    </option>
                    <option value="105">
                      Jai Prakash Narayan Apex Trauma Centre
                    </option>
                    <option value="108">
                      National Cancer Institute JHAJJAR
                    </option>
                    <option value="112">National Centre of Aging</option>
                    <option value="107">
                      National Drug Dependence Treatment Centre
                    </option>
                    <option value="110">Neurosciences Centre</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="center" className="form-label">
                  Dealing Office/Establishment{" "}
                  <sup className="text-danger">*</sup>{" "}
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Center" arrow placement="right">
                  <select
                    className="form-select"
                    required
                    value={dealingOffice}
                    onChange={(e) => setDealingOffice(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="22013">Burns and Plastic Surgery</option>
                    <option value="22009">
                      Cardiothoracic and Neuroscience Centre
                    </option>
                    <option value="22003">
                      Centre htmlFor Dental Education
                    </option>
                    <option value="22007">
                      Comprehensive Rural Health Services Project, Ballabhgarh
                    </option>
                    <option value="22004">
                      Dr. BR Ambedkar Institute Rotary Cancer Hospital
                    </option>
                    <option value="22005">
                      Dr. Rajendra Prasad Centre htmlFor Ophthalmic Science
                    </option>
                    <option value="22001">Faculty Cell</option>
                    <option value="22010">Hospital</option>
                    <option value="22006">
                      Jai Prakash Narayan Apex Trauma Centre
                    </option>
                    <option value="22002">Main AIIMS</option>
                    <option value="22008">
                      National Drug Dependence Treatment Centre
                    </option>
                    <option value="22011">NCI Jhajjar</option>
                    <option value="22012">Research Section</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="center" className="form-label">
                  Department <sup className="text-danger">*</sup>{" "}
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Nationality" arrow placement="top">
                  <select
                    className="form-select"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="275">AB1 WARD</option>
                    <option value="277">AB2 ICU</option>
                    <option value="276">AB2 WARD</option>
                    <option value="278">AB3 WARD</option>
                    <option value="280">AB4 DIALYSIS</option>
                    <option value="279">AB4 WARD</option>
                    <option value="282">AB5 ICU</option>
                    <option value="281">AB5 WARD</option>
                    <option value="283">AB6 WARD</option>
                    <option value="284">AB7 WARD</option>
                    <option value="285">AB8 ICU</option>
                    <option value="2">Academics</option>
                    <option value="235">Account - NDDTC</option>
                    <option value="438">Account Section - CDER</option>
                    <option value="436">Account Section - Exam</option>
                    <option value="162">Account Section - IRCH</option>
                    <option value="217">Account Section - JPNATC</option>
                    <option value="360">Account Section - NCI Jhajjar</option>
                    <option value="185">Account Section - RPC</option>
                    <option value="407">Accounts - Research</option>
                    <option value="268">Accounts Section - CNC</option>
                    <option value="121">ACR CEll</option>
                    <option value="1">Administration</option>
                    <option value="409">Admin - Research</option>
                    <option value="264">Admin Store 1</option>
                    <option value="265">Admin Store 2 and Finance</option>
                    <option value="266">A.M.S</option>
                    <option value="146">Anaesthesia</option>
                    <option value="393">Anaesthesia OT</option>
                    <option value="6">
                      Anaesthesiology, Pain Medicine and Critical Care
                    </option>
                    <option value="7">Anatomy</option>
                    <option value="447">Ancillary</option>
                    <option value="178">Anesthesia and Radiology</option>
                    <option value="204">Anesthesia &amp; CC</option>
                    <option value="539">Assistant (N.S)</option>
                    <option value="197">Audio Visual Department</option>
                    <option value="140">Audit</option>
                    <option value="123">Audit Section</option>
                    <option value="52">B.B. Dikshit Library</option>
                    <option value="271">Billing Section</option>
                    <option value="8">Biochemistry</option>
                    <option value="9">Biomedical Engineering</option>
                    <option value="68">BIO-MEDICAL WASTE MANAGEMENT</option>
                    <option value="10">Biophysics</option>
                    <option value="11">Biostatistics</option>
                    <option value="12">Biotechnology</option>
                    <option value="267">Blood Bank</option>
                    <option value="536">Blood Donation Camp</option>
                    <option value="249">
                      Blood Transfusion Services (BTS, CNC)
                    </option>
                    <option value="124">Budget</option>
                    <option value="507">
                      BURNS AND PLASTIC SURGERY (COVID WARD)
                    </option>
                    <option value="286">C1 WARD</option>
                    <option value="344">C2 ICU</option>
                    <option value="288">C2 SLEEP LAB</option>
                    <option value="287">C2 WARD</option>
                    <option value="289">C3 LABOUR ROOM + MATERNITY OT</option>
                    <option value="290">C3 NEONATAL ICU-A</option>
                    <option value="291">C4 WARD</option>
                    <option value="292">C5 WARD</option>
                    <option value="293">C6 WARD</option>
                    <option value="294">C7 WARD</option>
                    <option value="53">
                      Cadaver Training and Research Facility
                    </option>
                    <option value="415">Cafeteria</option>
                    <option value="78">CAO Office</option>
                    <option value="241">Cardiac Anaesthesiology</option>
                    <option value="245">Cardiac Biochemistry</option>
                    <option value="242">Cardiac Pathology</option>
                    <option value="243">Cardiac Radiology</option>
                    <option value="13">Cardiology</option>
                    <option value="244">
                      Cardiothoracic &amp; Vascular Surgery
                    </option>
                    <option value="125">Cash</option>
                    <option value="126">Cashier</option>
                    <option value="137">CDER</option>
                    <option value="398">CDER OT</option>
                    <option value="397">CDER ward</option>
                    <option value="54">Central Animal Facility (C.A.F)</option>
                    <option value="441">
                      Centralised Core Research Facility
                    </option>
                    <option value="444">
                      Central Medical Education (C.M.E.T)
                    </option>
                    <option value="445">Central Registgration Office</option>
                    <option value="69">Central Sterile Services</option>
                    <option value="116">Central Store Depot (CSD)</option>
                    <option value="99">Central Stores</option>
                    <option value="75">Central Workshop</option>
                    <option value="14">
                      Centre htmlFor Community Medicine (C.C.M)
                    </option>
                    <option value="127">Cheque Section</option>
                    <option value="188">Chief Office</option>
                    <option value="406">Chief Office - CDER</option>
                    <option value="412">Chief Office - IRCH</option>
                    <option value="410">Chief Office - JPNATC</option>
                    <option value="85">CIMR</option>
                    <option value="80">
                      Clinical and Epidemiology Unit (C.E.U)
                    </option>
                    <option value="102">Clinical Labs</option>
                    <option value="72">CNC</option>
                    <option value="320">CNO OFFICE</option>
                    <option value="15">College of Nursing</option>
                    <option value="179">Community Ophthalmology</option>
                    <option value="55">Computer Facility</option>
                    <option value="145">
                      Conservative dentistry &amp; endodontics
                    </option>
                    <option value="199">Contact Lens Lab</option>
                    <option value="92">Co-ordination Cell</option>
                    <option value="193">Cornea Lab</option>
                    <option value="177">
                      Cornea, Lens, Refractive Surgery, LVA, Ocular Oncology
                      (Unit-VI)
                    </option>
                    <option value="174">
                      Cornea &amp; Refractive Surgery, Occular Surface Disease,
                      CL (Unit-III)
                    </option>
                    <option value="76">CRHSP Ballabhgarh</option>
                    <option value="467">CRIA Facility</option>
                    <option value="222">Critical and Intensive Care</option>
                    <option value="346">CSSD</option>
                    <option value="402">CSSD - CNC</option>
                    <option value="252">CT Record Section</option>
                    <option value="295">D1 WARD</option>
                    <option value="296">D2 WARD</option>
                    <option value="297">D3 WARD</option>
                    <option value="298">D4 WARD</option>
                    <option value="301">D5 DIALYSIS UNIT</option>
                    <option value="300">D5 ICU</option>
                    <option value="299">D5 WARD</option>
                    <option value="303">D6 ICU</option>
                    <option value="302">D6 WARD</option>
                    <option value="305">D7 HDU</option>
                    <option value="304">D7 WARD</option>
                    <option value="111">DDA Office</option>
                    <option value="161">Delhi Cancer Registry</option>
                    <option value="151">Dentrofacial Orthopaedics</option>
                    <option value="231">Depart Ballabhgarh</option>
                    <option value="232">Depart Ballabhgarh 2</option>
                    <option value="44">
                      Department of Radio-diagnosis and Interventional Radiology
                      - Main AIIMS
                    </option>
                    <option value="537">Department of Transport</option>
                    <option value="16">Dermatology &amp; Venereology</option>
                    <option value="401">Dietetics - CNC</option>
                    <option value="17">Dietetics - Hospital</option>
                    <option value="171">Dietetics - IRCH</option>
                    <option value="356">Dietetics - NCI Jhajjar</option>
                    <option value="191">Dietics - RPC</option>
                    <option value="110">Director Office</option>
                    <option value="206">
                      Division of forensic pathology and molecular laboratory
                    </option>
                    <option value="250">DNS</option>
                    <option value="220">DNS Office</option>
                    <option value="112">DS Office</option>
                    <option value="341">ECG Lab</option>
                    <option value="56">EHS</option>
                    <option value="117">E.H.S. Cell</option>
                    <option value="381">EHS Pharmacy</option>
                    <option value="57">
                      Electron Microscope Facility (E.M.F)
                    </option>
                    <option value="200">Electrophysiology Lab</option>
                    <option value="18">Emergency Medicine</option>
                    <option value="19">
                      Endocrinology, Metabolism &amp; Diabetes
                    </option>
                    <option value="98">Engg Services</option>
                    <option value="357">
                      Engineering Service Division - NCI
                    </option>
                    <option value="66">
                      Engineering Services Division (ESD)
                    </option>
                    <option value="411">
                      Engineering Services Division (ESD) - CNC
                    </option>
                    <option value="428">
                      Engineering &amp; Services Division (ESD) - RPC
                    </option>
                    <option value="394">ENT Minor OT</option>
                    <option value="87">Estab I</option>
                    <option value="88">Estab II</option>
                    <option value="152">Establishment - CDER</option>
                    <option value="234">Establishment - NDDTC</option>
                    <option value="184">Establishment Section</option>
                    <option value="274">Establishment Section - CNC</option>
                    <option value="168">Establishment Section - IRCH</option>
                    <option value="216">Establishment Section - JPNATC</option>
                    <option value="371">Establishment Section - NCI</option>
                    <option value="94">Estate Section</option>
                    <option value="425">Ethics Committee Office</option>
                    <option value="4">Examination Section</option>
                    <option value="118">Examination Section</option>
                    <option value="89">Faculty Cell</option>
                    <option value="134">FA Office</option>
                    <option value="135">F&amp;CO Office</option>
                    <option value="71">Finance division</option>
                    <option value="221">Forensic Medicine</option>
                    <option value="20">Forensic Medicine and Toxicology</option>
                    <option value="22">
                      Gastroenterology and Human Nutrition
                    </option>
                    <option value="391">Gastroenterology OT</option>
                    <option value="23">Gastrointestinal Surgery</option>
                    <option value="91">General Section</option>
                    <option value="400">Genetic Unit Pediatrics</option>
                    <option value="21">Geriatric Medicine</option>
                    <option value="307">GERIATRIC MEDICINE WARD</option>
                    <option value="195">Glaucoma Lab</option>
                    <option value="175">
                      Glaucoma, Neuro-opthamlmology &amp; Squint (Unit-IV)
                    </option>
                    <option value="128">G.P.F.</option>
                    <option value="138">Grievance Cell</option>
                    <option value="417">Guest House</option>
                    <option value="427">Gymkhana</option>
                    <option value="24">Haematology</option>
                    <option value="343">HDCC</option>
                    <option value="114">Hindi Section</option>
                    <option value="540">Hosital</option>
                    <option value="3">Hospital</option>
                    <option value="169">Hospital Admin.</option>
                    <option value="86">Hospital Administration</option>
                    <option value="247">Hospital Administration (CNC)</option>
                    <option value="358">Hospital Admin. - NCI</option>
                    <option value="434">Hospital Billing Section</option>
                    <option value="100">Hospital Establishment</option>
                    <option value="108">
                      Hospital Peripheral Services, Laundry, Blood Bank,
                      Sanitation, Dietetics,CSSD
                    </option>
                    <option value="104">Hospital Stores</option>
                    <option value="389">Hospital Transport Office</option>
                    <option value="418">Hostel Section</option>
                    <option value="321">INFECTION CONTROL</option>
                    <option value="213">Information Technology</option>
                    <option value="253">Intensive and Critical Care</option>
                    <option value="192">Investigative Lab</option>
                    <option value="203">IOL Lab</option>
                    <option value="84">IRCH</option>
                    <option value="322">IVF OT</option>
                    <option value="82">Jhajjar</option>
                    <option value="238">Jhajjar 1</option>
                    <option value="239">Jhajjar 2 store</option>
                    <option value="339">Jhajjar OPD</option>
                    <option value="58">K.L. Wig CMET</option>
                    <option value="332">Lab. Medicine</option>
                    <option value="453">LAB MEDICINE(Bio Chem)</option>
                    <option value="456">
                      LAB MEDICINE(CI.Path And Immunology)
                    </option>
                    <option value="454">LAB MEDICINE(Common item)</option>
                    <option value="452">LAB MEDICINE(Hematology)</option>
                    <option value="455">LAB MEDICINE(Microbiology)</option>
                    <option value="155">Laboratory Oncology - IRCH</option>
                    <option value="359">Laboratory Oncology - NCI</option>
                    <option value="202">Laser Lab</option>
                    <option value="119">Legal Cell</option>
                    <option value="172">
                      Lens, Refractive surgery, Vitreoretina, Uvea &amp; ROP
                      (Unit I)
                    </option>
                    <option value="426">Library - NCI Jhajjar</option>
                    <option value="323">MAIN BLOOD BANK</option>
                    <option value="388">Main Central Enquiry</option>
                    <option value="386">Main CRO</option>
                    <option value="129">MAIN EMERGENCY</option>
                    <option value="324">MAIN EMERGENCY</option>
                    <option value="387">Main Hospital Laundry</option>
                    <option value="416">Main Kitchen</option>
                    <option value="385">Main Medical Record Section</option>
                    <option value="325">MAIN OT</option>
                    <option value="383">Main Sanitation Department</option>
                    <option value="395">Manifold Room</option>
                    <option value="309">MATERNAL CHILD UNIT</option>
                    <option value="338">Maternity OT</option>
                    <option value="113">Media &amp; Protocol Division</option>
                    <option value="157">Medical Oncology - IRCH</option>
                    <option value="372">Medical Oncology - NCI</option>
                    <option value="156">Medical Physics - IRCH</option>
                    <option value="361">Medical Physics - NCI</option>
                    <option value="163">Medical Record Section - IRCH</option>
                    <option value="214">Medical Record Section - JPNATC</option>
                    <option value="362">
                      Medical Record Section - NCI Jhajjar
                    </option>
                    <option value="404">Medical Record Section - RPC</option>
                    <option value="106">Medical Records - Main AIIMS</option>
                    <option value="59">
                      Medical Social &amp; Welfare Services
                    </option>
                    <option value="65">
                      Medical Social Welfare Unit (Main Hospital )
                    </option>
                    <option value="26">Medicine</option>
                    <option value="27">Microbiology</option>
                    <option value="153">MS Office - CDER</option>
                    <option value="355">MS OFFICE - JPNATC</option>
                    <option value="136">MS Office - Main AIIMS</option>
                    <option value="187">MS Office - RPC</option>
                    <option value="166">MSSO unit</option>
                    <option value="363">MSSO unit - NCI</option>
                    <option value="109">MSWS</option>
                    <option value="333">MSW Unit</option>
                    <option value="471">NABL (Microbiology)</option>
                    <option value="504">
                      NATIONAL CENTRE OF AGEING (N.C.A)
                    </option>
                    <option value="201">National Eye Bank</option>
                    <option value="414">
                      National Medical Journal of India
                    </option>
                    <option value="60">
                      National Poisons Information Centre
                    </option>
                    <option value="233">NDDTC</option>
                    <option value="308">NEONATAL ICU B KMC</option>
                    <option value="28">Nephrology</option>
                    <option value="73">neuro</option>
                    <option value="208">Neuroanaesthesia</option>
                    <option value="255">
                      Neuroanaesthesiology and Critical Care
                    </option>
                    <option value="259">Neuro Biochemistry</option>
                    <option value="254">Neurology</option>
                    <option value="256">Neuro Pathology</option>
                    <option value="422">Neuro Psychiatry</option>
                    <option value="260">Neuro Psychology</option>
                    <option value="257">Neuro Radiology</option>
                    <option value="209">Neurosurgery</option>
                    <option value="326">NEW EMERGENCY WARD</option>
                    <option value="317">NEW PRIVATE WARD FIRST FLOOR</option>
                    <option value="316">NEW PRIVATE WARD GROUND FLOOR</option>
                    <option value="318">NEW PRIVATE WARD SECOND FLOOR</option>
                    <option value="319">NEW PRIVATE WARD THIRD FLOOR</option>
                    <option value="330">NEW PRIVATE WARD X-RAY</option>
                    <option value="439">New RAK OPD</option>
                    <option value="327">NIS</option>
                    <option value="419">NMJI</option>
                    <option value="251">N.S.</option>
                    <option value="190">NS Office</option>
                    <option value="263">NS Record Section</option>
                    <option value="30">
                      Nuclear Magnetic Resonance Imaging
                    </option>
                    <option value="29">Nuclear Medicine</option>
                    <option value="31">Nursing Department</option>
                    <option value="352">
                      Nursing In-serivce Education(NIE)
                    </option>
                    <option value="164">Nursing Office</option>
                    <option value="105">Nursing Services</option>
                    <option value="446">OB and GYN</option>
                    <option value="32">
                      Obstetrics and Gynaecology (OBST.
                    </option>
                    <option value="180">Ocular Biochemistry</option>
                    <option value="181">Ocular Microbiology</option>
                    <option value="182">Ocular Pathology</option>
                    <option value="183">Ocular Pharmacology</option>
                    <option value="432">Office of President</option>
                    <option value="431">Officer on Special Duty</option>
                    <option value="442">Officers Association Office</option>
                    <option value="315">OLD PRIVATE WARD FIFTH FLOOR</option>
                    <option value="311">OLD PRIVATE WARD FIRST FLOOR</option>
                    <option value="314">OLD PRIVATE WARD FOURTH FLOOR</option>
                    <option value="312">OLD PRIVATE WARD SECOND FLOOR</option>
                    <option value="313">OLD PRIVATE WARD THIRD FLOOR</option>
                    <option value="154">Onco-Anaesthesia - IRCH</option>
                    <option value="364">Onco-Anaesthesia - NCI</option>
                    <option value="272">O.P.D</option>
                    <option value="101">OPD Casualty</option>
                    <option value="79">OPD, Pharmacy Incharge</option>
                    <option value="413">Operation Theatre - IRCH</option>
                    <option value="142">
                      Oral &amp; maxillofacial surgery
                    </option>
                    <option value="148">Oral medicine &amp; radiology</option>
                    <option value="147">Oral pathology</option>
                    <option value="246">ORBO &amp; Stem Cell Facility</option>
                    <option value="61">
                      Organ Retrieval Banking Organisation (ORBO)
                    </option>
                    <option value="141">
                      Orthodontics and dentofacial deformities
                    </option>
                    <option value="33">Orthopaedics</option>
                    <option value="198">OT</option>
                    <option value="443">Other</option>
                    <option value="34">Otorhinolaryngology</option>
                    <option value="81">Paediatric (Genetics Unit)</option>
                    <option value="334">Paediatrics</option>
                    <option value="35">Paediatrics Surgery</option>
                    <option value="224">Paediatric Surgery</option>
                    <option value="470">PAED-NEURO DIVISION</option>
                    <option value="62">Patent Cell</option>
                    <option value="37">Pathology</option>
                    <option value="144">
                      Pediatric &amp; preventive dentistry
                    </option>
                    <option value="150">Periodontology</option>
                    <option value="38">Pharmacology</option>
                    <option value="196">Photography Section</option>
                    <option value="40">
                      Physical Medicine &amp; Rehabilitation (P.M.R)
                    </option>
                    <option value="39">Physiology</option>
                    <option value="403">Physiotherapy - JPNATC</option>
                    <option value="215">
                      Plastic Reconstructive and Burn surgery
                    </option>
                    <option value="41">Plastic Surgery</option>
                    <option value="350">PM House</option>
                    <option value="130">Pre-Audit Section</option>
                    <option value="421">Preventive Oncology</option>
                    <option value="143">
                      Prosthodontics &amp; crown bridge
                    </option>
                    <option value="42">Psychiatry</option>
                    <option value="149">Public health dentistry</option>
                    <option value="399">Public Health Dentistry</option>
                    <option value="43">
                      Pulmonary Medicine and Sleep Disorders
                    </option>
                    <option value="306">PULMONARY MEDICINE WARD</option>
                    <option value="74">Radiation Oncology</option>
                    <option value="159">Radiation Oncology - IRCH</option>
                    <option value="366">Radiation Oncology - NCI</option>
                    <option value="464">Radio Diagnosis</option>
                    <option value="158">Radio Diagnosis - IRCH</option>
                    <option value="365">Radio Diagnosis - NCI Jhajjar</option>
                    <option value="405">Radio Diagnosis - RPC</option>
                    <option value="230">Radio Imaging</option>
                    <option value="211">Radiology</option>
                    <option value="503">RADIO-THERAPY</option>
                    <option value="329">RAK OPD</option>
                    <option value="541">RAK OPD</option>
                    <option value="273">Reception</option>
                    <option value="97">Recruitment Cell</option>
                    <option value="345">RELIEVER</option>
                    <option value="45">Reproductive Biology</option>
                    <option value="5">Research</option>
                    <option value="46">Research Section</option>
                    <option value="194">Retina Lab</option>
                    <option value="47">Rheumatology</option>
                    <option value="310">RHEUMATOLOGY DAY CARE</option>
                    <option value="433">RPC</option>
                    <option value="96">RTI</option>
                    <option value="538">Sanitation Department and (ESD)</option>
                    <option value="170">Sanitation - IRCH</option>
                    <option value="219">Sanitation - JPNATC</option>
                    <option value="115">Sanitation - Main AIIMS</option>
                    <option value="367">Sanitation - NCI</option>
                    <option value="269">Sanitation Office - CNC</option>
                    <option value="120">SC/ST Cell</option>
                    <option value="122">Security</option>
                    <option value="468">SECURITY (Fire Safety)</option>
                    <option value="83">SET Facility</option>
                    <option value="176">
                      Squint, Neuro Ophthalmology, Pediatric Ophthalmology and
                      Oculoplasty (Unit-V)
                    </option>
                    <option value="133">Sr. FA Office</option>
                    <option value="429">STATISTICAL-UNIT, RPC</option>
                    <option value="67">Stem Cell Committee</option>
                    <option value="131">Store Account - Main AIIMS</option>
                    <option value="430">Store - CDER</option>
                    <option value="70">Store (DO)</option>
                    <option value="236">Store - NDDTC</option>
                    <option value="270">Store Section - CNC</option>
                    <option value="186">Store Section - RPC</option>
                    <option value="408">Stores - Research</option>
                    <option value="167">Stores Section - IRCH</option>
                    <option value="218">Stores Section - JPNATC</option>
                    <option value="368">Stores Section - NCI Jhajjar</option>
                    <option value="223">Surgery</option>
                    <option value="423">Surgical Discipline</option>
                    <option value="48">Surgical Disciplines</option>
                    <option value="160">Surgical Oncology - IRCH</option>
                    <option value="369">Surgical Oncology - NCI</option>
                    <option value="63">Telemedicine Facility</option>
                    <option value="50">
                      Transfusion Medicine (Blood Bank)
                    </option>
                    <option value="49">
                      Transplant Immunology &amp; Immunogenetics
                    </option>
                    <option value="64">Transport Facility</option>
                    <option value="189">Transport Office - RPC</option>
                    <option value="165">Transport Unit - IRCH</option>
                    <option value="370">Transport Unit - NCI</option>
                    <option value="375">Trauma Blood Bank</option>
                    <option value="77">Trauma Centre</option>
                    <option value="378">Trauma Dietics</option>
                    <option value="374">Trauma Lab Medicine</option>
                    <option value="376">Trauma Medical Record Section</option>
                    <option value="373"> Trauma OT</option>
                    <option value="420">Trauma Radiology Centre</option>
                    <option value="379">Trauma Sanitaion</option>
                    <option value="377">Trauma Store</option>
                    <option value="212">
                      Trauma Surgery And Critical Care
                    </option>
                    <option value="380">Trauma Transport Departments</option>
                    <option value="340">Trilokpuri</option>
                    <option value="51">Urology</option>
                    <option value="93">Vigilance Cell</option>
                    <option value="506">VIROLOGY (Microbiology)</option>
                    <option value="384">Vishram Sadan</option>
                    <option value="173">
                      Vitreoretina, Uvea &amp; ROP (unit II)
                    </option>
                    <option value="103">
                      Wards,Private Wards &amp; Operation
                    </option>
                    <option value="390">Welfare Officer</option>
                    <option value="132">Works Audit</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="center" className="form-label">
                  Designation <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Designation" arrow placement="left">
                  <select
                    className="form-select"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="101">Accounts Officer</option>
                    <option value="441">Acting Superintendent Engineer</option>
                    <option value="455">Additional Director</option>
                    <option value="406">Additional Professor</option>
                    <option value="102">Administrative Officer</option>
                    <option value="103">AIDS Educator-Cum-Counselor</option>
                    <option value="104">Animal House Attendant Grade I</option>
                    <option value="105">Animal House Attendant Grade II</option>
                    <option value="106">
                      Animal House Attendant Grade III
                    </option>
                    <option value="107">Artist</option>
                    <option value="109">Assistant Accounts Officer</option>
                    <option value="110">
                      Assistant Administrative Officer
                    </option>
                    <option value="111">Assistant Architect</option>
                    <option value="112">
                      Assistant Blood Transfusion Officer
                    </option>
                    <option value="113">
                      Assistant Controller of Examinations
                    </option>
                    <option value="114">Assistant Dietician</option>
                    <option value="115">Assistant Engineer (A/C and R)</option>
                    <option value="116">Assistant Engineer (Civil)</option>
                    <option value="117">Assistant Engineer (Elect.)</option>
                    <option value="119">
                      Assistant Engineer htmlFor Vigilance Cell (Civil)
                    </option>
                    <option value="118">Assistant Engineer (Telephone)</option>
                    <option value="120">Assistant Laundry Supervisor</option>
                    <option value="121">Assistant Manager (HRD)</option>
                    <option value="108">Assistant (N.S.)</option>
                    <option value="122">
                      Assistant Nursing Superintendent
                    </option>
                    <option value="404">Assistant Professor</option>
                    <option value="123">
                      Assistant Public Relation Officer
                    </option>
                    <option value="124">Assistant Security Officer</option>
                    <option value="125">Assistant Stores Officer</option>
                    <option value="126">Assistant Warden</option>
                    <option value="405">Associate Professor</option>
                    <option value="128">Beldar</option>
                    <option value="130">Biochemist</option>
                    <option value="129">Bio Medical Engineer</option>
                    <option value="127">B.T.O./C.M.O.</option>
                    <option value="131">Carpenter</option>
                    <option value="132">Chemist</option>
                    <option value="133">Chief Administrative Officer</option>
                    <option value="134">Chief Artist</option>
                    <option value="135">Chief Dietician</option>
                    <option value="136">Chief Librarian</option>
                    <option value="403">Chief Medical Officer (SAG)</option>
                    <option value="137">Chief Medical Record Officer</option>
                    <option value="138">
                      Chief Medical Social Service Officer
                    </option>
                    <option value="139">Chief Nursing Officer</option>
                    <option value="415">Chief of Center</option>
                    <option value="140">Chief Pharmacist</option>
                    <option value="141">
                      Chief Physio/Occupational Therapist
                    </option>
                    <option value="142">Chief Security Officer</option>
                    <option value="143">Chief Technical Officer (CWS)</option>
                    <option value="144">Chief Technical Officer (MLT)</option>
                    <option value="145">
                      Chief Technical Officer (Ophth.)
                    </option>
                    <option value="146">
                      Chief Technical Officer (Radiology)
                    </option>
                    <option value="147">
                      Chief Technical Officer (Radio-Therapy)
                    </option>
                    <option value="148">Child Psychologist</option>
                    <option value="149">Choudhary</option>
                    <option value="150">Cleaner</option>
                    <option value="151">
                      Clinical Psychologist/Psychologist
                    </option>
                    <option value="152">Cook Grade I</option>
                    <option value="153">Cook Grade II</option>
                    <option value="154">Cytoscreener</option>
                    <option value="439">DA</option>
                    <option value="421">Dark Room Assistant</option>
                    <option value="155">Dark Room Assistant Grade I</option>
                    <option value="156">Dark Room Assistant Grade II</option>
                    <option value="157">Dark Room Assistant Grade III</option>
                    <option value="158">Data Entry Operator Grade A</option>
                    <option value="159">Data Entry Operator Grade B</option>
                    <option value="160">Data Entry Operator Grade C</option>
                    <option value="161">Data Entry Operator Grade D</option>
                    <option value="162">Data Entry Operator Grade E</option>
                    <option value="440">
                      Dean (Academic) and Head of Department
                    </option>
                    <option value="163">Dental Technician Grade I</option>
                    <option value="164">Dental Technician Grade II</option>
                    <option value="165">Deputy Chief Security Officer</option>
                    <option value="166">
                      Deputy Director (Administration)
                    </option>
                    <option value="167">
                      Deputy Director (Computer Facility)
                    </option>
                    <option value="168">Deputy Fire Officer</option>
                    <option value="169">
                      Deputy General Manager (Cafeteria)
                    </option>
                    <option value="170">Deputy Nursing Superintendent</option>
                    <option value="412">Deputy Secretary</option>
                    <option value="171">Deputy Warden</option>
                    <option value="172">Dietician</option>
                    <option value="410">Director</option>
                    <option value="173">Dispatch Rider</option>
                    <option value="174">Donor Organizer</option>
                    <option value="175">Draftsman Grade III</option>
                    <option value="176">Draughtsman Grade II</option>
                    <option value="177">Driver Grade I</option>
                    <option value="178">Driver Grade II</option>
                    <option value="179">Driver Ordinary Grade</option>
                    <option value="180">Driver Special Grade</option>
                    <option value="181">ECG Assistant</option>
                    <option value="183">Educationalist</option>
                    <option value="182">Educational Media Generalist</option>
                    <option value="184">Electrician</option>
                    <option value="185">Epidemiologist</option>
                    <option value="186">Executive Engineer (A/C and R)</option>
                    <option value="187">Executive Engineer (Civil)</option>
                    <option value="188">Executive Engineer (Elect.)</option>
                    <option value="444">FELLOW</option>
                    <option value="189">Ferroprinter</option>
                    <option value="190">
                      Finance and Chief Accounts Officer
                    </option>
                    <option value="191">Financial Adviser</option>
                    <option value="192">Foreman(A/C and R)</option>
                    <option value="193">Forman (Electrical)</option>
                    <option value="196">Gasman</option>
                    <option value="194">Gas Mechanic</option>
                    <option value="195">Gas Steward</option>
                    <option value="197">General Duty Medical Officer</option>
                    <option value="198">General Manager (Cafeteria)</option>
                    <option value="456">Genetic Counsellor</option>
                    <option value="199">Head Bearer</option>
                    <option value="200">Head Cook</option>
                    <option value="414">Head of Department</option>
                    <option value="201">Health Assistant</option>
                    <option value="202">Health Educator</option>
                    <option value="203">Hindi Officer</option>
                    <option value="204">Horticulturist</option>
                    <option value="205">Hospital Attendant Grade I</option>
                    <option value="206">Hospital Attendant Grade II</option>
                    <option value="207">Hospital Attendant Grade III</option>
                    <option value="416">Joint Secretary</option>
                    <option value="208">Junior Accounts Officer</option>
                    <option value="420">
                      Junior Administrative Assisstant
                    </option>
                    <option value="424">Junior Administrative Officer</option>
                    <option value="209">Junior Engineer (A/C and R)</option>
                    <option value="210">Junior Engineer (Civil)</option>
                    <option value="211">Junior Engineer (Elect)</option>
                    <option value="212">Junior Hindi Translator</option>
                    <option value="213">Junior Medical Lab Technologist</option>
                    <option value="214">Junior Medical Record Officer</option>
                    <option value="215">Junior Photographer</option>
                    <option value="216">
                      Junior Physiotherapist/Occupational Therapist
                    </option>
                    <option value="217">Junior Reception Officer</option>
                    <option value="446">Junior Resident</option>
                    <option value="448">Junior Resident NON ACAD</option>
                    <option value="218">Junior Statistician</option>
                    <option value="219">Junior Stores Officer</option>
                    <option value="220">Junior Warden</option>
                    <option value="221">Khalasi</option>
                    <option value="222">Laboratory Attendant Grade II</option>
                    <option value="223">Labour Officer</option>
                    <option value="453">LAB Technician</option>
                    <option value="224">Laundry Attendant</option>
                    <option value="225">Laundry Manager</option>
                    <option value="226">Laundry Operator Grade I</option>
                    <option value="227">Laundry Operator Grade II</option>
                    <option value="228">Laundry Operator Grade III</option>
                    <option value="229">Laundry Supervisor</option>
                    <option value="408">Lecturer</option>
                    <option value="230">Librarian Grade I</option>
                    <option value="231">Librarian Grade II</option>
                    <option value="232">Librarian Grade III</option>
                    <option value="233">Librarian Selection Grade</option>
                    <option value="234">Library Attendant Grade I</option>
                    <option value="235">Library Attendant Grade II</option>
                    <option value="236">Library Guard</option>
                    <option value="237">Life Guard</option>
                    <option value="238">Lineman (Elect.)</option>
                    <option value="427">Lower Division Clerk</option>
                    <option value="239">Mali</option>
                    <option value="240">Manager (HRD)</option>
                    <option value="425">Manager (Vishram Sadan)</option>
                    <option value="241">Masalchi / Bearer Grade I</option>
                    <option value="242">Masalchi / Bearer Grade II</option>
                    <option value="243">Mason</option>
                    <option value="244">Mechanic (A/C and R)</option>
                    <option value="245">Mechanic (E and M)</option>
                    <option value="246">Medical Lab Technologist</option>
                    <option value="402">Medical Physicist</option>
                    <option value="247">
                      Medical Record Attendant Grade I
                    </option>
                    <option value="248">
                      Medical Record Attendant Grade II
                    </option>
                    <option value="249">Medical Record Officer</option>
                    <option value="250">Medical Record Technician</option>
                    <option value="251">
                      Medical Social Service Officer Grade I
                    </option>
                    <option value="252">
                      Medical Social Service Officer Grade II
                    </option>
                    <option value="411">Medical Superintendent</option>
                    <option value="253">Morgue Attendant Grade-I</option>
                    <option value="254">Morgue Attendant Grade-II</option>
                    <option value="255">Multipurpose Worker</option>
                    <option value="417">Multi Task Service (MTS)</option>
                    <option value="256">Nuclear Medicine Technologist</option>
                    <option value="257">Nursing Officer</option>
                    <option value="258">Nursing Superintendent</option>
                    <option value="259">Office Attendant Grade I</option>
                    <option value="260">Office Attendant Grade II</option>
                    <option value="437">Officer on Special Duty</option>
                    <option value="261">Office Superintendent</option>
                    <option value="428">Office Superintendent</option>
                    <option value="452">Operating Theatre Technician</option>
                    <option value="262">Operation Theatre Assistant</option>
                    <option value="263">
                      Operator (E and M)/Lift Operator
                    </option>
                    <option value="264">Ophthalmic Technician Grade I</option>
                    <option value="265">OSD to President</option>
                    <option value="1">Other</option>
                    <option value="266">Painter</option>
                    <option value="429">Painter</option>
                    <option value="454">Part Time Social Guide</option>
                    <option value="267">Perfusionist</option>
                    <option value="268">Personal Assistant</option>
                    <option value="269">Pharmacist Grade I</option>
                    <option value="270">Pharmacist Grade II</option>
                    <option value="271">Physical Training Instructor</option>
                    <option value="272">
                      Physiotherapist/Occupational Therapist
                    </option>
                    <option value="273">Plumber</option>
                    <option value="430">Plumber</option>
                    <option value="274">Post Partum Attendant</option>
                    <option value="438">President AIIMS</option>
                    <option value="409">Principal</option>
                    <option value="275">Principal Private Secretary</option>
                    <option value="276">Printing Machine Operator</option>
                    <option value="277">Private Secretary</option>
                    <option value="407">Professor</option>
                    <option value="278">Programmer</option>
                    <option value="279">Projectionist Grade I</option>
                    <option value="280">Projectionist Grade II</option>
                    <option value="284">
                      Publication Assistant (Hindi/English)
                    </option>
                    <option value="281">Public Health Nurse</option>
                    <option value="282">
                      Public Health Nurse (Supervisor)
                    </option>
                    <option value="283">Public Relation Officer</option>
                    <option value="285">Quality Control Manager</option>
                    <option value="286">Receptionist</option>
                    <option value="287">Registrar</option>
                    <option value="288">Reprographic Technician</option>
                    <option value="289">Sanitary Attendant Grade I</option>
                    <option value="290">Sanitary Attendant Grade II</option>
                    <option value="291">Sanitary Attendant Grade III</option>
                    <option value="292">Sanitary Inspector Grade I</option>
                    <option value="293">Sanitary Inspector Grade II</option>
                    <option value="426">Sanitary Supervisor Grade I</option>
                    <option value="294">Sanitation Officer</option>
                    <option value="295">Scientist I</option>
                    <option value="296">Scientist I (Absorption)</option>
                    <option value="297">Scientist II</option>
                    <option value="298">Scientist II (Absorption)</option>
                    <option value="299">Scientist III</option>
                    <option value="300">Scientist III (Absorption)</option>
                    <option value="301">Scientist IV</option>
                    <option value="302">Scientist IV (Absorption)</option>
                    <option value="303">Scientist V (Absorption)</option>
                    <option value="304">
                      Secretary Assistant to President
                    </option>
                    <option value="306">Security-cum-Fire Guard Grade I</option>
                    <option value="307">
                      Security-cum-Fire Guard Grade II
                    </option>
                    <option value="308">Security-cum-Fire Jamadar</option>
                    <option value="305">Security Officer</option>
                    <option value="419">Senior Administrative Assistant</option>
                    <option value="309">Senior Administrative Officer</option>
                    <option value="310">Senior Artist</option>
                    <option value="311">Senior Biochemist</option>
                    <option value="312">Senior Carpenter</option>
                    <option value="313">Senior Chemist</option>
                    <option value="314">Senior Dietician</option>
                    <option value="315">Senior Financial Advisor</option>
                    <option value="316">Senior Hindi Translator</option>
                    <option value="431">Senior Mali</option>
                    <option value="317">Senior Mali</option>
                    <option value="318">Senior Mason</option>
                    <option value="319">Senior Mechanic (A/C and R)</option>
                    <option value="320">Senior Mechanic (E and M)</option>
                    <option value="321">Senior Medical Physicist</option>
                    <option value="432">Senior Medical Physicist</option>
                    <option value="322">Senior Medical Record Officer</option>
                    <option value="413">Senior Nursing Officer</option>
                    <option value="323">Senior Office Attendant</option>
                    <option value="324">Senior Operator (E and M)</option>
                    <option value="325">Senior Painter</option>
                    <option value="326">Senior Perfusionist</option>
                    <option value="327">
                      Senior Pharmacist/Manufacturing Pharmacist
                    </option>
                    <option value="328">Senior Photographer</option>
                    <option value="329">
                      Senior Physio/Occupational Therapist
                    </option>
                    <option value="330">Senior Plumber</option>
                    <option value="331">Senior Programmer</option>
                    <option value="450">Senior Resident</option>
                    <option value="332">Senior Sanitation Officer</option>
                    <option value="333">Senior Scientific Officer</option>
                    <option value="334">Senior Steward</option>
                    <option value="335">Senior Store Officer</option>
                    <option value="336">Senior Technical Editor</option>
                    <option value="337">Senior Technical Officer (CWS)</option>
                    <option value="338">
                      Senior Technical Officer (E and M Biophysics)
                    </option>
                    <option value="339">Senior Technical Officer (ENT)</option>
                    <option value="340">
                      Senior Technical Officer (Histo)
                    </option>
                    <option value="341">Senior Technical Officer (MLT)</option>
                    <option value="342">
                      Senior Technical Officer (Ophth.)
                    </option>
                    <option value="343">
                      Senior Technical Officer (Perfusion)
                    </option>
                    <option value="344">
                      Senior Technical Officer (Photo)
                    </option>
                    <option value="346">
                      Senior Technical Officer (Radiology)
                    </option>
                    <option value="347">
                      Senior Technical Officer (Radio-Therapy)
                    </option>
                    <option value="345">
                      Senior Technical Officer (R and AL)
                    </option>
                    <option value="348">Senior Veterinary Officer</option>
                    <option value="349">
                      Senior Veterinary Officer (Surgeon)
                    </option>
                    <option value="350">Senior Warden</option>
                    <option value="351">Sewerman</option>
                    <option value="352">Social Psychologist</option>
                    <option value="353">Sr. Hindi Officer</option>
                    <option value="422">Sr. Technical officer</option>
                    <option value="354">Statistical Assistant</option>
                    <option value="355">Statistician</option>
                    <option value="433">Stenographer</option>
                    <option value="356">Stenographer</option>
                    <option value="357">Steward</option>
                    <option value="358">Store Keeper</option>
                    <option value="359">Store Officer</option>
                    <option value="360">Superintendent Engineer</option>
                    <option value="361">
                      Superintendent Physio/Occupational Therapist
                    </option>
                    <option value="362">
                      Supervising Medical Social Service Officer
                    </option>
                    <option value="363">System Analyst</option>
                    <option value="364">Tailor Grade I</option>
                    <option value="365">Tailor Grade II</option>
                    <option value="366">Tailor Grade III</option>
                    <option value="367">Technical Assistant (ENT)</option>
                    <option value="368">Technical Assistant (O.T.)</option>
                    <option value="457">Technical(CR)</option>
                    <option value="369">Technical Officer (CWS)</option>
                    <option value="370">Technical Officer (Dental)</option>
                    <option value="371">Technical Officer (ENT) Grade I</option>
                    <option value="372">
                      Technical Officer (ENT) Grade II
                    </option>
                    <option value="373">Technical Officer (MLT)</option>
                    <option value="375">Technical Officer (Ophth.)</option>
                    <option value="374">Technical Officer (O.T.)</option>
                    <option value="377">Technical Officer (Radiology)</option>
                    <option value="378">
                      Technical Officer (Radio-Therapy)
                    </option>
                    <option value="376">Technical Officer (R and AL)</option>
                    <option value="379">Technician (O.T.)</option>
                    <option value="380">Technician (Radiology)</option>
                    <option value="381">
                      Technician (Radio-Therapy) Grade I
                    </option>
                    <option value="382">
                      Technician (Radio-Therapy) Grade II
                    </option>
                    <option value="383">Technician (Telephone) Grade I</option>
                    <option value="384">Technician (Telephone) Grade II</option>
                    <option value="385">
                      Technician (Telephone) Grade III
                    </option>
                    <option value="386">Technician (Telephone) Grade IV</option>
                    <option value="423">Technologist</option>
                    <option value="387">
                      Telecom Operating Assistant Grade I
                    </option>
                    <option value="434">
                      Telecom Operating Assistant Grade I
                    </option>
                    <option value="388">
                      Telecom Operating Assistant Grade II
                    </option>
                    <option value="418">Trainee</option>
                    <option value="389">Transplant Coordinator</option>
                    <option value="390">
                      Tutor in Nursing/Senior Nursing Tutor
                    </option>
                    <option value="435">Upper Division Clerk</option>
                    <option value="436">Upper Division Clerk</option>
                    <option value="391">Veterinary Officer</option>
                    <option value="392">Vocational Counsellor</option>
                    <option value="393">Warden</option>
                    <option value="394">Welfare Officer</option>
                    <option value="395">Wireman</option>
                    <option value="396">Workshop Assistant (CWS)</option>
                    <option value="397">
                      Workshop Technician Grade I (CWS)
                    </option>
                    <option value="399">
                      Workshop Technician Grade II (CWS)
                    </option>
                    <option value="400">
                      Workshop Technician Grade II (R and AL)
                    </option>
                    <option value="398">
                      Workshop Technician Grade I (R and AL)
                    </option>
                    <option value="401">Yoga Instructor</option>
                  </select>
                </Tooltip>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="center" className="form-label">
                  Emp. class <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Center" arrow placement="right">
                  <select
                    className="form-select"
                    required
                    value={empClass}
                    onChange={(e) => setEmpClass(e.target.value)}
                  >
                    <option selected value="-1">
                      Select Value
                    </option>
                    <option value="Faculty">Faculty</option>
                    <option value="Non Faculty">Non Faculty</option>
                  </select>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="strPANNumber" className="form-label">
                  PAN Card No. <sup className="text-danger">*</sup>
                </label>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title=" PAN Card No." arrow placement="top">
                  <span className="input-group-text">
                    <input
                      type="password"
                      className="form-control text-uppercase"
                      id="strPANNumber"
                      placeholder="AAAAA6785H"
                      maxLength="10"
                      required
                      value={panCard}
                      onChange={(e) => setPanCard(e.target.value)}
                      onBlur={validatePanCardNumber}
                    />
                    &nbsp;
                    <i
                      className="bi bi-eye-fill"
                      onClick={togglePasswordVisibility}
                    ></i>
                  </span>
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number: <sup className="text-danger">*</sup>
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Mobile Number" arrow placement="right">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="0123456789"
                    value={mobileNumber}
                    onBlur={validateMobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength="10"
                    required
                  />
                </Tooltip>
              </div>

              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <label htmlFor="emailAddress" className="form-label">
                  Email address:
                </label>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2 mb-4">
                <Tooltip title="Email ID" arrow placement="right">
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    value={emailAddress}
                    onChange={(e) => setEmilId(e.target.value)}
                    placeholder="name@example.com"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="mt-4">
              <Tooltip title="Submit" arrow placement="left">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={registerEmployee}
                >
                  Submit
                </button>
              </Tooltip>
              <Tooltip title="Clear" arrow placement="top">
                <button className="btn btn-secondary m-2" type="reset">
                  Clear
                </button>
              </Tooltip>
              <Tooltip title="Close" arrow placement="right">
                <button className="btn btn-danger" type="close">
                  Close
                </button>
              </Tooltip>
            </div>
            {/* <div className="col-5 col-sm-4 text-right " id="savecancelbtn">
              <div
                className="btn-group "
                role="group"
                aria-label="Basic example"
              >
                <Tooltip title="Save" arrow placement="left">
                  <button
                    type="button"
                    className="btn border "
                    id="submitId"
                    title="Save"
                  >
                    <i
                      className="bi bi-floppy"
                      style={{ color: "#00bb00" }}
                    ></i>
                  </button>
                </Tooltip>
                <Tooltip title="Reset" arrow placement="top">
                  <button
                    type="button"
                    className="btn border "
                    id="clearId"
                    title="Clear"
                  >
                    <i
                      className="bi bi-arrow-counterclockwise"
                      style={{ color: "#3c7eb5" }}
                    ></i>
                  </button>
                </Tooltip>
                <Tooltip title="Close" arrow placement="right">
                  <button
                    type="button"
                    className="btn border"
                    id="cancelId"
                    title="close"
                  >
                    <i
                      className="bi bi-x-circle"
                      style={{ color: "#dc3545" }}
                    ></i>
                  </button>
                </Tooltip>
              </div>
            </div> */}
          </div>
        </form>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Registration;
