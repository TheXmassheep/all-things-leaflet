# Idea

The idea for the map is as follow:
- Visualize the UCDP Actors Dataset

How?:
- use the information about countries to georeference the actors
- then display them based on the centroid coordinates as markers
- link the markers with lines for actors that have multiple locations

Add-Ons:
- use the group markers function to group markers
- a search field would also be nice

## Georeferencing
- The UCPDP actors dataset does ot have coordinate or other geometry information
- but it has gleditsch and ward country codes

- Therefore i needed another dataset that has the country codes and centroid data


# Files and Folders
- to prep the data i created a sub-directory "data-prep"
    - here all the raw data and processing scripts are stored


# Data

**UCDP**

- UCDP Data downloaded from [UCDP-Downloads](https://ucdp.uu.se/downloads/index.html#actor)
    - downloaded UCDP Actor Dataset version 24.1
    - "ucdp-actor-241.csv"

**Centroids**
- Centroid Data for Countries downloaded from [world-countries-centroids](https://github.com/gavinr/world-countries-centroids)
    - "countries.csv"

**Dealing with Gleditsch and Ward country Codes**
- Views country dataset downloaded from [VIEWS](https://viewsforecasting.org/gis-resources/)
    - "MatchingTable_VIEWS_Country_IDs.csv"

- the issue here is that it is apparently super hard to match these codes with other country codes
- i finally found the above dataset witch matches the gleditsch and ward codes with ISO codes

## Data-Prep
- I think the easiest actually to georeference the entries is to do some steps in Excel first

**Current Status**
- The data prep atre a lot of time
- we currently generate a geojson that has single and multipoint features, each corresponding to one actor
    - [ ] another task i did not finish but began was adding more data to the features
    - you can see this in the last cells of the "prepping.ipynb" notebook
- [ ] eventually the additional data shouls also be made available through tooltips
- [ ] the multipoint features should be linked
- [ ] markers should be grouped