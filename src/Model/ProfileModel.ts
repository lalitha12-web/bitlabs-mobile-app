interface ProfileModel {
    // Contact Info
    uniqueId: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    primaryContact: string;
  
    // Academics Info
    diploma: {
      cgpa: number;
      info: string;
      specialization: string;
      level: string;
      graduatingYear: number;
    };
  
    // Achievement Info
    attendance: {
      totalDays: number;
      attendedDays: number;
    };
    ranking: {
      rank: number;
      count: number;
    };
    training: {
      hours: number;
    };
    scores: {
      technical: number;
      softskill: number;
      grandTest: {
        history: { score: number; date: string }[];
        averageScore: number;
      };
    };
    interviewReadyFlag: boolean;
    skills: string[];
  
    // Deployment Info
    interviews: {
      date: string;
      companyInfo: string;
      result: {
        attendanceFlag: boolean;
        selectedFlag: boolean;
      };
      role: string;
      interviewLocation: string;
      feedback: string;
    }[];
    placementInfo: {
      companyInfo: string;
      modeOfPlacement: {
        contractToHireFlag: boolean;
        permanentFlag: boolean;
      };
      joiningDate: string;
      placementDate: string;
      packageInfo: {
        annualSalary: number;
        signOnBonus: number;
      };
    };
  
    // External Links Info
    externalLinks: {
      googleDriveLink: string;
      githubLink: string;
      linkedInLink: string;
    };
  
    // Onboarding Info
    onboarding: {
      batch: {
        name: string;
        profilePictureUrl: string;
      };
      mentor: {
        name: string;
        email: string;
        specialization: string;
        profilePictureUrl: string;
      };
      lms: {
        id: string;
        startDate: string;
        endDate: string;
        planInfo: string;
      };
    };
  
    // Payments Info
    payments: {
      bankInfo: {
        name: string;
        branchInfo: string;
        accountNo: string;
        IFSCCode: string;
      };
      stipend: {
        currentAmount: number;
        history: {
          amount: number;
          transactionDate: string;
        }[];
      };
      fees: {
        totalAmount: number;
        history: {
          amount: number;
          transactionDate: string;
        }[];
      };
      financialPartner: string;
    };
  
    // Security Info
    security: {
        gmail: string;
        uuid: string;
        crmId: string;
        status: string;
    };
  }
  
  export default ProfileModel;
  