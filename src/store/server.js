import axios from 'axios'
import DataStore from './store.js'

class DataServer {
    async setBusinessData(data) {
        const response = await axios.put("http://localhost:8787/businessData", data)
        if (response.status === 200) {
            DataStore.setBusinessData(data);
        }
    };
    async getBusinessData() {
        const response = await axios.get("http://localhost:8787/businessData");
        const data = await response.data;
        DataStore.setBusinessData(data);
    };
    async getServices() {
        const services = await axios.get('http://localhost:8787/services');
        DataStore.setServices(services.data);
    };
    async addService(service) {
        const response = await axios.post('http://localhost:8787/service', service)
        if (response.status === 200) {
            DataStore.addService(service);
            return 'success';
        }
        else {
            DataStore.isAddService = false;
            return 'failed';
        }
    };
    async getMeetings() {
        const meetings = await axios.get('http://localhost:8787/appointments');
        DataStore.setMeetings(meetings.data);
    }

    async addMeeting(meeting) {
        DataStore.isAddMeeting = false;
        const response = await axios.post('http://localhost:8787/appointment', meeting)
        if (response.status === 200) {
            DataStore.addMeeting(meeting);
            return 'success';
        }
        else {
            return 'failed';
        }
    }

} export default new DataServer();