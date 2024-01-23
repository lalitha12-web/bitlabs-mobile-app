import ProfileModel from '../Model/ProfileModel';

class ProfileViewModel {
  profile: ProfileModel;

  constructor() {
    this.profile = {
      uniqueId: '123456',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '1234567890',
      address: '123 Main St, City',
      primaryContact: 'Parent',

      diploma: {
        cgpa: 3.5,
        info: 'Diploma Information',
        specialization: 'Computer Science',
        level: 'Bachelor',
        graduatingYear: 2023,
      },

      attendance: {
        totalDays: 100,
        attendedDays: 90,
      },
      ranking: {
        rank: 1,
        count: 50,
      },
      training: {
        hours: 200,
      },
      scores: {
        technical: 80,
        softskill: 90,
        grandTest: {
          history: [
            { score: 85, date: '2023-05-01' },
            { score: 90, date: '2023-05-05' },
            { score: 95, date: '2023-05-10' },
          ],
          averageScore: 90,
        },
      },
      interviewReadyFlag: true,
      skills: ['JavaScript', 'React', 'Node.js'],

      interviews: [
        {
          date: '2023-06-01',
          companyInfo: 'ABC Corp',
          result: {
            attendanceFlag: true,
            selectedFlag: true,
          },
          role: 'Software Engineer',
          interviewLocation: 'City',
          feedback: 'Positive',
        },
        {
          date: '2023-06-10',
          companyInfo: 'XYZ Corp',
          result: {
            attendanceFlag: true,
            selectedFlag: false,
          },
          role: 'Frontend Developer',
          interviewLocation: 'City',
          feedback: 'Negative',
        },
      ],
      placementInfo: {
        companyInfo: 'XYZ Corp',
        modeOfPlacement: {
          contractToHireFlag: false,
          permanentFlag: true,
        },
        joiningDate: '2023-07-01',
        placementDate: '2023-06-15',
        packageInfo: {
          annualSalary: 80000,
          signOnBonus: 5000,
        },
      },

      externalLinks: {
        googleDriveLink: 'https://drive.google.com',
        githubLink: 'https://github.com',
        linkedInLink: 'https://linkedin.com',
      },

      onboarding: {
        batch: {
          name: 'Batch 2023',
          profilePictureUrl: 'https://example.com/batch.jpg',
        },
        mentor: {
          name: 'Mentor Name',
          email: 'mentor@example.com',
          specialization: 'Backend Development',
          profilePictureUrl: 'https://example.com/mentor.jpg',
        },
        lms: {
          id: 'LMS123',
          startDate: '2023-06-01',
          endDate: '2023-12-31',
          planInfo: 'Learning Management System Information',
        },
      },

      payments: {
        bankInfo: {
          name: 'Bank Name',
          branchInfo: 'Branch Name',
          accountNo: '1234567890',
          IFSCCode: 'ABC123',
        },
        stipend: {
          currentAmount: 5000,
          history: [
            { amount: 4000, transactionDate: '2023-05-01' },
            { amount: 4500, transactionDate: '2023-05-15' },
            { amount: 5000, transactionDate: '2023-05-30' },
          ],
        },
        fees: {
          totalAmount: 20000,
          history: [
            { amount: 10000, transactionDate: '2023-05-01' },
            { amount: 5000, transactionDate: '2023-05-15' },
            { amount: 5000, transactionDate: '2023-05-30' },
          ],
        },
        financialPartner: 'Financial Partner Name',
      },

      security: {
        gmail: 'example@gmail.com',
        uuid: '1234567890',
        crmId: 'CRM123',
        status: 'Active',
      },
    };
  }
}

export default ProfileViewModel;
