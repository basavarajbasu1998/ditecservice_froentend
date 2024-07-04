const ekycBody =
  "Aadhaar e-KYC is a service offered by the Unique Identification Authority of India (UIDAI). Under e-KYC organizations can validate the identity of an individual by verifying the personal details of an individual such as name, address, etc.";
const authenticationBody =
  "Aadhaar authentication is the process where in Aadhaar number, along with other attributes (demographic/ biometrics/ OTP) is submitted to UIDAI's Central Identities Data Repository (CIDR) for verification";

const subauaBody =
  "Sub-AUA Agency on boarding process talks about the pre-requisites/initial process steps to be fulfilled by the Government departments/agencies which are willing to avail the DITEC provided services.";

export const content = [
  {
    cardMedia: "/assets/images/sub_aua_registration.png",
    cardHeader: "Sub AUA/KUA Onboarding",
    cardBody: subauaBody,
    navigation: "/ditec/subaua",
    mb: -1,
  },
  {
    cardMedia: "/assets/images/autentication.png",
    cardHeader: "Authentication",
    cardBody: authenticationBody,
    navigation: "/ditec/authentication",
    mb: 2.5,
  },
  {
    cardMedia: "/assets/images/wallets-with-e-KYC.jpg",
    cardHeader: "e-KYC",
    cardBody: ekycBody,
    // navigation: "/ditec/e-KYC",
  },
];
