import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization:
      "Bearer y2FAsIdwbYK32FCCqOEg7QhrEWyDwSHikWUZDKM8klBSdSJxt6CJi7mnqm2UEv3b-WkoOKWCPkgPl9zoYG23E7FhSbgJqR2X1mWtmsgGGNn0109ArJ86pr02vrfeY3Yx",
  },
});