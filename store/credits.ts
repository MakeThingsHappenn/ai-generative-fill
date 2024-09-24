import { makeAutoObservable } from "mobx";
import { minusCredits, getCredits } from "@/api";

class CreditsStore {
  credits: number = 0;
  creditLoading: boolean = false;
  userIp: string = "";

  constructor() {
    makeAutoObservable(this);
    if (this.userIp) {
      this.fetchCredits();
    } else {
      this.fetchUserIp();
    }
  }

  fetchUserIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      this.userIp = data.ip;
      this.fetchCredits();
    } catch (error) {
      console.error("Error fetching user IP:", error);
    }
  };

  updateCredits = async () => {
    try {
      const response = await minusCredits({ userIp: this.userIp });
      console.log("response", response);
      this.credits = response.data.credits;
    } catch (error) {
      console.error("Error fetching credits:", error);
    } finally {
      this.creditLoading = false;
    }
    if (this.userIp) {
      this.fetchCredits();
    } else {
      console.log("fetching user ip");
      this.fetchUserIp();
    }
  };

  fetchCredits = async () => {
    try {
      const response = await getCredits({ userIp: this.userIp });
      this.credits = response.data.credits;
      console.log("credits", this.credits);
    } catch (error) {
      console.error("Error fetching credits:", error);
    } finally {
      this.creditLoading = false;
    }
  };
}

export const creditsStore = new CreditsStore();

