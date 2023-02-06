import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchRestaurants = async (searchTerm) => {
      try {
        const response = await yelp.get("/businesses/search", {
          responseType: "json",
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
      } catch (error) {
        setErrorMessage("Something went wrong" + error);
      }
    };

    useEffect(() => {
      fetchRestaurants("pasta");
    }, []);

    return [fetchRestaurants, results, errorMessage]
}