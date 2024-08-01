import React, { useState, useEffect } from 'react';
import './CSS/Farmer.css'
// Sample data
const seasonCrops = {
  rabi: ['Wheat', 'Barley', 'Peas', 'Mustard', 'Chickpeas', 'Oats', 'Linseed', 'Lentils'],
  kharif: ['Rice', 'Maize', 'Sorghum', 'Soybean', 'Cotton', 'Groundnut', 'Jowar', 'Pulses'],
  seasonal: ['Sugarcane', 'Cotton', 'Groundnut', 'Sunflower', 'Potato', 'Onion', 'Garlic', 'Tomato', 'Brinjal', 'Pumpkin']
};

const stateDistricts = {
   AndhraPradesh: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Nellore', 'Srikakulam', 'Visakhapatnam', 'West Godavari', 'Y.S.R.'],
  ArunachalPradesh: ['Changlang', 'East Kameng', 'East Siang', 'Kra Daadi', 'Khampti', 'Kurung Kumey', 'Lepa Rada', 'Lower Dibang Valley', 'Lower Subansiri', 'Namsai', 'Papum Pare', 'Tawang', 'Tirap', 'Upper Dibang Valley', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
  Assam: ['Baksa', 'Barpeta', 'Bongaigaon', 'Cachar', 'Chirang', 'Darrang', 'Dhemaji', 'Dibrugarh', 'Goalpara', 'Golaghat', 'Hailakandi', 'Jorhat', 'Kamrup', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'Tinsukia'],
  Bihar: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'Gaya', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
  Chhattisgarh: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Janjgir-Champa', 'Jashpur', 'Kanker', 'Kawardha', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Surguja'],
  Goa: ['North Goa', 'South Goa'],
  Gujarat: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kutch', 'Mahisagar', 'Mehsana', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'],
  Haryana: ['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Mahendragarh', 'Mewat', 'Panchkula', 'Panipat', 'Rewari', 'Sirsa', 'Sonipat', 'Yamunanagar'],
  HimachalPradesh: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
  Jharkhand: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ranchi', 'Sahibganj', 'Seraikela-Kharsawan', 'West Singhbhum'],
  Karnataka: ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkamagaluru', 'Chikkaballapur', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Yadgir'],
  Kerala: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur'],
  MadhyaPradesh: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashok Nagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khar district', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Pachmarhi', 'Panna', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Shivpuri', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
  Maharashtra: ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
  Manipur: ['Bishnupur', 'Churachandpur', 'Chandel', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
  Meghalaya: ['East Garo Hills', 'East Khasi Hills', 'Jaintia Hills', 'Ri-Bhoi', 'West Garo Hills', 'West Khasi Hills'],
  Mizoram: ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Serchhip'],
  Nagaland: ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'],
  Odisha: ['Angul', 'Bargarh', 'Boudh', 'Bhadrak', 'Balasore', 'Balangir', 'Baragarh', 'Cuttack', 'Dhenkanal', 'Ganjam', 'Gajapati', 'Jajpur', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khurda', 'Koraput', 'Malkangiri', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
  Punjab: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Patiala', 'Rupnagar', 'S.A.S. Nagar', 'Sangrur', 'Tarn Taran'],
  Rajasthan: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Rajasthan', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'],
  Sikkim: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
  TamilNadu: ['Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Madurai', 'Nagapattinam', 'Nilgiris', 'Perambalur', 'Pudukottai', 'Ramanathapuram', 'Salem', 'Sivagangai', 'Tiruchirappalli', 'Tirunelveli', 'Tirupur', 'Tiruvallur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'],
  Telangana: ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jammikunta', 'Jayashankar', 'Jogulamba', 'Kamareddy', 'Karimnagar', 'Khammam', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Warangal', 'Yadadri Bhuvanagiri'],
  Tripura: ['Dhalai', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
  UttarPradesh: ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Auraiya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Jhansi', 'Kannauj', 'Kanpur', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Sant Ravidas Nagar', 'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
  Uttarakhand: ['Almora', 'Bageshwar', 'Bharatpur', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Uttarkashi'],
  WestBengal: ['Bankura', 'Bardhaman', 'Birbhum', 'Cooch Behar', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Kolkata', 'Malda', 'Midnapore', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'South 24 Parganas', 'Purulia', 'Paschim Medinipur', 'Purba Medinipur'],

};

const InsuranceForm = () => {
  const [states, setStates] = useState(Object.keys(stateDistricts));
  const [districts, setDistricts] = useState([]);
  const [crops, setCrops] = useState([]);
  
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [season, setSeason] = useState('');
  const [crop, setCrop] = useState('');
  const [area, setArea] = useState('');
  const [result, setResult] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');

  useEffect(() => {
    if (state) {
      setDistricts(stateDistricts[state]);
    } else {
      setDistricts([]);
    }
  }, [state]);

  useEffect(() => {
    if (season) {
      setCrops(seasonCrops[season]);
    } else {
      setCrops([]);
    }
  }, [season]);

  const handleCalculate = () => {
    if (state && district && season && crop && area) {
      const calculatedResult = area * 26;
      setResult(`₹${calculatedResult}`);
    } else {
      setResult('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="form-container">
      <h1>Apply For Insurance</h1>
      <form id="locationForm">
        <div className="form-group">
          <label htmlFor="name">Enter Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXXXXXXX" required />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Enter Mail:</label>
          <input type="email" id="mail" name="mail" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} required>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state.replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <select id="district" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} required>
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district.toLowerCase().replace(/\s+/g, '-')}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="season">Season:</label>
          <select id="season" name="season" value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">Select Season</option>
            {Object.keys(seasonCrops).map((season) => (
              <option key={season} value={season}>
                {season.charAt(0).toUpperCase() + season.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="crops">Crops Grown:</label>
          <select id="crops" name="crops" value={crop} onChange={(e) => setCrop(e.target.value)} required>
            <option value="">Select Crop</option>
            {crops.map((crop) => (
              <option key={crop} value={crop.toLowerCase().replace(/\s+/g, '-')}>
                {crop}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="area">Area (in hectare):</label>
          <input type="number" id="area" name="area" step="0.01" value={area} onChange={(e) => setArea(e.target.value)} required />
        </div>
        <button type="button" id="calculateButton" onClick={handleCalculate}>Calculate</button>
        <h3>You Have to pay:</h3>
        <div className="calculate" id="calculateResult">
          {result}
        </div>
        <div className="form-group">
          <label htmlFor="doc-type">Select Government Document:</label>
          <input type="text" id="doc-type" name="doc_type" value={docType} onChange={(e) => setDocType(e.target.value)} placeholder="Enter Document Type (e.g., Aadhar, PAN, Passport, NREGA)" />
        </div>
        <div id="document-field" className={docType ? "form-group" : "hidden form-group"}>
          <label htmlFor="document-number">Document Number:</label>
          <input type="text" id="document-number" name="document_number" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} placeholder="Enter Document Number" />
        </div>
        <div className="form-group">
          <label htmlFor="docs">Submit Documents:</label>
          <input type="file" name="docs" required />
        </div>
        <button type="button" id="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default InsuranceForm;
