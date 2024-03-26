<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Sci-Sources</h3>

  <p align="center">
    Scientific citations made easy!
    <a href="https://github.com/MMPG-Consulting/sci-sources/issues">Report Bug</a>
    ·
    <a href="https://github.com/MMPG-Consulting/sci-sources/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This project emanates from the need to cite sources in a scientific manner. The package supports all kind of publication types:

- Books
- Chapter or other part of a book
- Conference proceedings
- Conference papers
- Journal article
- Websites

### Built With

- Typescript v5

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

- node v12 and up

### Installation

1. `npm install @mmpg-soft/sci-sources`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Usage is fairly straitforward. Import the following methods as needed:

```Typescript
import { formatBookSource } from "@mmpg-soft/sci-sources";
import { formatBookPartSource } from "@mmpg-soft/sci-sources";
import { formatConferencePapersSource } from "@mmpg-soft/sci-sources";
import { formatConferenceproceedingsSource } from "@mmpg-soft/sci-sources";
import { formatJournalArticleSource } from "@mmpg-soft/sci-sources";
import { formatWebSource } from "@mmpg-soft/sci-sources";
```

Each method takes two arguments: `source` (mandatory) and `key` (optional).
The `key` will be formatted and added to the citation in order act as a reference to your citation.
The `source` has a type for each method, check it before using it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

## Catch me online

Mikael - [@mikgross195357](https://twitter.com/@mikgross195357) - [Bento.me/mikael-gross](https://bento.me/mikael-gross)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
