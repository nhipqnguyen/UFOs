# UFOs
# Project Overview
In this project, I visualized UFO sightings by customizing a webpage using the Bootstrap framework, and equipping a table with several fully functional filters that would allow users to interact with the visualizations. 

## Challenge Overview
After creating the webpage with UFO sightings that allows user to filter the data by date, I provided a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, I added table filters for the city, state, country, and shape.

## Resources
- Data Source: data.js

## Results
- Below is a screenshot of the webpage before user applies any filters:

  ![UFOs web page](https://github.com/nhipqnguyen/UFOs/blob/main/static/images/UFOs_webpage.png)
  
- User can filter multiple criteria at the same time. User just needs to type in the search term in each filter box in the given format and press Tab or Enter. For example, below is a screenshot of the webpage after user types "el cajon" in the "city" filter box. The webpage returns 5 sightings that were spotted in El Cajon.

  ![Filtered City UFOs](https://github.com/nhipqnguyen/UFOs/blob/main/static/images/filtered_UFOs_webpage_1.png)

- Next, user types "triangle" in the "shape" filter box and gets only 2 sightings returned as shown below since the other 3's shapes were "formation" and "light".
  
  ![Filtered City and Shape UFOs](https://github.com/nhipqnguyen/UFOs/blob/main/static/images/filtered_UFOs_webpage_2.png)

## Summary
- One drawback of this webpage is that though it allows users to filter sightings based on multiple criteria, it does not have a sort button that allows users to sort the data in different ways/ columns.
- Two additional recommendations for further development:
  - We can add a sort function to columns "Date", "City", "State", "Country" that allows users to sort each column in ascending/ descending order.
  - We can add a filter to the "Duration" column that allows users to set a minimum or maximum duration. For example, users will be able to filter the sightings that were longer than 6 minutes or shorter than 12 minutes.

