import { makeObservable, observable, action } from "mobx";
import dataServer from "./server";

class DataStore {
    businessData = {}
    services = []
    meetings = [];
    isLogin = false;
    isAddMeeting = false;
    isAddService = false;
    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addService: action,
            isAddService: observable,
            meetings: observable,
            setMeetings: action,
            addMeeting: action,
            isAddMeeting: observable,
            isLogin: observable,
            setIsLogin: action,
            businessData: observable,
            setBusinessData: action,
        })
        dataServer.getServices();
        dataServer.getMeetings();
        this.businessData = dataServer.getBusinessData();
    }
    setIsLogin = (value) => {
        this.isLogin = value
    }
    setServices = (services) => {
        this.services = [...this.services, ...services];
    }
    addService = (service) => {
        this.isAddService = true;
        this.services = [...this.services, service];
    }
    setMeetings = (meetings) => {
        this.meetings = [...this.meetings, ...meetings]
        this.meetings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    }
    addMeeting = (meeting) => {
        this.isAddMeeting = true;
        this.meetings = [...this.meetings, meeting]
    }
    setBusinessData = (data) => {
        this.businessData = data;
    }
}
export default new DataStore();

