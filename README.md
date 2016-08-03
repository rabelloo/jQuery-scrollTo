# jQuery-scrollTo
Scrolling to elements made easy

## Usage
scrollTo has 5 overloads:

- `$().scrollTo()`
- `$().scrollTo(options)`
- `$().scrollTo(selector)`
- `$().scrollTo(duration)`
- `$().scrollTo(selector, duration)`

Its parameters are:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| options | object `{}` | `{ selector: this, duration: 500, margin: 0  }` | Options to be used by the method |
| selector | string `""` or DOM node `<div>` or jQuery object`$()` | `this` | The element to which the screen will scroll to |
| duration | number `0` | 500 | How long will the scrolling animation last |

Additionally, the `options` parameter has 3 properties:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| selector | string `""` or DOM node `<div>` or jQuery object`$()` | `this` | The element to which the screen will scroll to |
| duration | number `0` | 500 | How long will the scrolling animation last |
| margin | number `0` | 0 | Additional margin for the scroll (useful for fixed headers) **- note: be extra careful with the number's signal (positive or negative)** |

**All parameters and options refer to the same settings**<br>
**Use the first overload to scroll directly to current jQuery object (`this`)**

## Conflict avoiding
scrollTo will automatically rename itself to **scrollToElement** if the property `$.fn.scrollTo` is not available
