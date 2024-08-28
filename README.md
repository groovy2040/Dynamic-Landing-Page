# Landing page with dynamic sections


## Usage
This template can be used as a separate page or can be also injected into any landing page generators what support ```code input``` feature. In order to have paragraph break inside article you just need to add ```\n``` symbol in proper places. Data structure of section input should be like next:
```javascript
{
    title: string,
    description: string
}
```
You can add more properties if needed. Then ```generateSection``` function should be updated in order to properly render all extra components

## Description
This is template supports dynamic input and will generate Landing page with any amount of sections. Also dynamic section with dynamically highlighted nav bar. Code can also support asynchronous data fetching from API.


## Dependencies
There are no external dependencies in the code. All used apis will work on all browsers