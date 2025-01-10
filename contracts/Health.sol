// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract HealthcarePlatform {
    struct Doctor {
        string name;
        string specialization;
        string qualifications;
        string medicalLicenseNumber;
        uint256 yearsOfExperience;
        string affiliatedHospitalOrClinic;
        string consultationHours;
        bool isRemoteAvailable;
        uint256 consultationFee;
        bool isActive;
    }

    struct Patient {
        string name;
        string location;
        bool isRuralArea;
        uint256 subsidyPercentage;
        bool isRegistered;
    }

    struct Record {
        uint256 recordId;
        string patientName;
        string diagnosis;
        string treatment;
        string prescriptions;
        bool isRemoteConsultation;
        uint256 consultationFee;
        uint256 timestamp;
        address doctor;
    }

    mapping(address => Doctor) private doctors;
    mapping(address => Patient) private patients;
    mapping(address => bool) private registeredDoctors;
    mapping(address => bool) private registeredPatients;
    mapping(address => Record[]) private patientRecords;

    event DoctorRegistered(address indexed doctor);
    event PatientRegistered(address indexed patient);
    event RecordAdded(uint256 recordId, address indexed patient, address indexed doctor);

    modifier onlyRegisteredDoctor() {
        require(registeredDoctors[msg.sender], "Not a registered doctor");
        _;
    }

    modifier onlyRegisteredPatient() {
        require(registeredPatients[msg.sender], "Not a registered patient");
        _;
    }

    // Register a doctor
    function registerDoctor(
        string memory _name,
        string memory _specialization,
        string memory _qualifications,
        string memory _medicalLicenseNumber,
        uint256 _yearsOfExperience,
        string memory _affiliatedHospitalOrClinic,
        string memory _consultationHours,
        bool _isRemoteAvailable,
        uint256 _consultationFee
    ) external {
        require(!registeredDoctors[msg.sender], "Doctor already registered");

        doctors[msg.sender] = Doctor({
            name: _name,
            specialization: _specialization,
            qualifications: _qualifications,
            medicalLicenseNumber: _medicalLicenseNumber,
            yearsOfExperience: _yearsOfExperience,
            affiliatedHospitalOrClinic: _affiliatedHospitalOrClinic,
            consultationHours: _consultationHours,
            isRemoteAvailable: _isRemoteAvailable,
            consultationFee: _consultationFee,
            isActive: true
        });

        registeredDoctors[msg.sender] = true;
        emit DoctorRegistered(msg.sender);
    }

    // Register a patient
    function registerPatient(
        string memory _name,
        string memory _location,
        bool _isRuralArea
    ) external {
        require(!registeredPatients[msg.sender], "Patient already registered");

        patients[msg.sender] = Patient({
            name: _name,
            location: _location,
            isRuralArea: _isRuralArea,
            subsidyPercentage: _isRuralArea ? 30 : 0,
            isRegistered: true
        });

        registeredPatients[msg.sender] = true;
        emit PatientRegistered(msg.sender);
    }

    // Add a medical record
    function addRecord(
        address _patient,
        string memory _diagnosis,
        string memory _treatment,
        string memory _prescriptions,
        bool _isRemoteConsultation
    ) external onlyRegisteredDoctor {
        require(registeredPatients[_patient], "Patient not registered");

        Doctor storage doctor = doctors[msg.sender];
        Patient storage patient = patients[_patient];

        uint256 consultationFee = doctor.consultationFee;
        if (_isRemoteConsultation) {
            require(doctor.isRemoteAvailable, "Doctor not available for remote consultation");
            consultationFee = (consultationFee * 80) / 100; // Remote consultations are discounted
        }

        uint256 recordId = patientRecords[_patient].length + 1;
        patientRecords[_patient].push(Record({
            recordId: recordId,
            patientName: patient.name,
            diagnosis: _diagnosis,
            treatment: _treatment,
            prescriptions: _prescriptions,
            isRemoteConsultation: _isRemoteConsultation,
            consultationFee: consultationFee,
            timestamp: block.timestamp,
            doctor: msg.sender
        }));

        emit RecordAdded(recordId, _patient, msg.sender);
    }


    function getPatientRecords(address _patient) external view returns (Record[] memory) {
        require(registeredPatients[_patient], "Patient not registered");
        return patientRecords[_patient];
    }


    function getDoctorDetails(address _doctor) external view returns (Doctor memory) {
        require(registeredDoctors[_doctor], "Doctor not registered");
        return doctors[_doctor];
    }
}
