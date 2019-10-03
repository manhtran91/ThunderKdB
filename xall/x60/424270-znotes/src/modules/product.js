/*****************************************************
 * This code was generated by a tool.                *
 * Changes to this file may cause incorrect behavior *
 * and will be lost if the code is regenerated.      *
 *****************************************************/

/* ***** BEGIN LICENSE BLOCK *****
 *
 * Version: GPL 3.0
 *
 * ZNotes
 * Copyright (C) 2012 Alexander Kapitman
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The Original Code is ZNotes.
 *
 * Initial Developer(s):
 *   Alexander Kapitman <akman.ru@gmail.com>
 *
 * Portions created by the Initial Developer are Copyright (C) 2012
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * ***** END LICENSE BLOCK ***** */

const EXPORTED_SYMBOLS = ["Product"];

var Product = function() {
  return {
    get Id() { return "znotes@akman.ru";      },
    get Name() { return "ZNotes";    },
    get Version() { return "0.9.24"; },
    get Vendor() { return "Akman";    },
    get Bundle() { return "net.akman.znotes";      },
    get Build() { return "20141126";      },
    get Site() { return "http://znotes.net/";    },
    get ApplicationLanguages() {
      var list = "en,ru,pl,fr,";
      return list.substr( 0, list.length - 1 );
    },
    get SiteLanguages() {
      var list = "en,ru,fr,";
      return list.substr( 0, list.length - 1 );
    },
    get Urls() {
      return {
        "en": { index: "en/index.xhtml", forum: "forum/viewforum.php?f=37" },
        "ru": { index: "ru/index.xhtml", forum: "forum/viewforum.php?f=38" },
        "fr": { index: "fr/index.xhtml", forum: "forum/viewforum.php?f=37" },
      };
    },
    get Licenses() {
      return [
        { name: "GNU General Public License Version 3.0", link: "http://www.gnu.org/licenses/gpl.html" },
      ];
    },
    get Repositories() {
      return [
        { name: "GitHub", link: "https://github.com/akman/znotes" },
      ];
    },
    get Creators() {
      return {
        "en": [
          { name: "Alexander Kapitman", link: "mailto:akman.ru@gmail.com" },
        ],
        "ru": [
          { name: "Александр Капитман", link: "mailto:akman.ru@gmail.com" },
        ],
        "pl": [
          { name: "Alexander Kapitman", link: "mailto:akman.ru@gmail.com" },
        ],
        "fr": [
          { name: "Alexander Kapitman", link: "mailto:akman.ru@gmail.com" },
        ],
      };
    },
    get Contributors() {
      return {
        "en": [
        ],
        "ru": [
        ],
        "pl": [
        ],
        "fr": [
        ],
      };
    },
    get Translators() {
      return {
        "en": [
          { name: "Alexander Kapitman", link: "mailto:akman.ru@gmail.com" },
        ],
        "ru": [
          { name: "Александр Капитман", link: "mailto:akman.ru@gmail.com" },
        ],
        "pl": [
          { name: "Paweł Krafczyk", link: "mailto:pkrafczyk@gmail.com" },
        ],
        "fr": [
          { name: "Michaël Brantus", link: "mailto:michael.brantus@gmail.com" },
        ],
      };
    },
    get Credits() {
      return {
        "en": [
          {
            name: "Marijn Haverbeke",
            title: "CodeMirror is a JavaScript component that provides a code editor in the browser", 
            description: "Fine-tuning a rich API and CSS theme support allows integrate the component to an application and fill it with new functionality.", 
            link: "http://codemirror.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://codemirror.net/LICENSE"
              },
            ],
          },
          {
            name: "Robert Eisele",
            title: "PNGLib generate client-side PNG files using JavaScript", 
            description: "Implementation of a client-side JavaScript library like libpng which creates a PNG data stream.", 
            link: "http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/",
            licenses: [
              {
                name: "BSD License",
                link: "http://www.opensource.org/licenses/bsd-license.php"
              },
            ],
          },
          {
            name: "FatCow Web Hosting",
            title: "3000 Free Farm-Fresh Web Icons", 
            description: "Download hundreds of FREE, beautifully designed icons. Icon set includes both 16 and 32 pixel versions of icons.", 
            link: "http://www.fatcow.com/free-icons",
            licenses: [
              {
                name: "Creative Commons Attribution 3.0 License",
                link: "http://creativecommons.org/licenses/by/3.0/"
              },
            ],
          },
          {
            name: "DocBook Project",
            title: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form", 
            description: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form that captures the logical structure of your content. Using free tools along with the DocBook XSL stylesheets, you can publish your content as HTML pages, PDF files, a variety of other formats.", 
            link: "http://docbook.sourceforge.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://wiki.docbook.org/DocBookLicense"
              },
            ],
          },
        ],
        "ru": [
          {
            name: "Marijn Haverbeke",
            title: "CodeMirror - это JavaScript компонент обеспечивающий редактирование кода в браузере", 
            description: "Тонкая настройка через богатый API и поддержка тем на основе CSS позволяют встроить компонент в приложение и наполнить его новой функциональностью.", 
            link: "http://codemirror.net",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://codemirror.net/LICENSE"
              },
            ],
          },
          {
            name: "Robert Eisele",
            title: "PNGLib создаёт PNG файлы на стороне клиента используя JavaScript", 
            description: "Реализация клиентской JavaScript библиотеки похожей на libpng которая создаёт поток данных PNG.", 
            link: "mailto:robert@xarg.org",
            licenses: [
              {
                name: "BSD License",
                link: "http://www.opensource.org/licenses/bsd-license.php"
              },
            ],
          },
          {
            name: "FatCow",
            title: "3000 Бесплатных свежайших веб иконок", 
            description: "Загружайте сотни БЕСПЛАТНЫХ, прекрасно сделанных иконок. Наборы иконок включают две версии иконок 16 и 32 пиксельные.", 
            link: "http://www.fatcow.com/free-icons",
            licenses: [
              {
                name: "Creative Commons Attribution 3.0 License",
                link: "http://creativecommons.org/licenses/by/3.0/"
              },
            ],
          },
          {
            name: "Проект DocBook",
            title: "DocBook — это технология разработки документации на основе XML", 
            description: "DocBook — это технология разработки документации на основе XML, позволяющая из единого исходного текста автоматически получать выходные документы в различных форматах (наиболее распространенные — HTML, PDF, HTML Help) и с разными вариантами компоновки и оформления.", 
            link: "http://docbook.sourceforge.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://wiki.docbook.org/DocBookLicense"
              },
            ],
          },
        ],
        "pl": [
          {
            name: "Marijn Haverbeke",
            title: "CodeMirror is a JavaScript component that provides a code editor in the browser", 
            description: "Fine-tuning a rich API and CSS theme support allows integrate the component to an application and fill it with new functionality.", 
            link: "http://codemirror.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://codemirror.net/LICENSE"
              },
            ],
          },
          {
            name: "Robert Eisele",
            title: "PNGLib generate client-side PNG files using JavaScript", 
            description: "Implementation of a client-side JavaScript library like libpng which creates a PNG data stream.", 
            link: "http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/",
            licenses: [
              {
                name: "BSD License",
                link: "http://www.opensource.org/licenses/bsd-license.php"
              },
            ],
          },
          {
            name: "FatCow Web Hosting",
            title: "3000 Free Farm-Fresh Web Icons", 
            description: "Download hundreds of FREE, beautifully designed icons. Icon set includes both 16 and 32 pixel versions of icons.", 
            link: "http://www.fatcow.com/free-icons",
            licenses: [
              {
                name: "Creative Commons Attribution 3.0 License",
                link: "http://creativecommons.org/licenses/by/3.0/"
              },
            ],
          },
          {
            name: "DocBook Project",
            title: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form", 
            description: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form that captures the logical structure of your content. Using free tools along with the DocBook XSL stylesheets, you can publish your content as HTML pages, PDF files, a variety of other formats.", 
            link: "http://docbook.sourceforge.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://wiki.docbook.org/DocBookLicense"
              },
            ],
          },
        ],
        "fr": [
          {
            name: "Marijn Haverbeke",
            title: "CodeMirror est un composant Javascript qui fournis un éditeur de code dans le navigateur", 
            description: "Fine-tuning a rich API and CSS theme support allows integrate the component to an application and fill it with new functionality.", 
            link: "http://codemirror.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://codemirror.net/LICENSE"
              },
            ],
          },
          {
            name: "Robert Eisele",
            title: "PNGLib génère des fichiers PNG coté client en utilisant le JavaScript", 
            description: "Implementation of a client-side JavaScript library like libpng which creates a PNG data stream.", 
            link: "http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/",
            licenses: [
              {
                name: "BSD License",
                link: "http://www.opensource.org/licenses/bsd-license.php"
              },
            ],
          },
          {
            name: "FatCow Web Hosting",
            title: "3000 Free Farm-Fresh Web Icons", 
            description: "Download hundreds of FREE, beautifully designed icons. Icon set includes both 16 and 32 pixel versions of icons.", 
            link: "http://www.fatcow.com/free-icons",
            licenses: [
              {
                name: "Creative Commons Attribution 3.0 License",
                link: "http://creativecommons.org/licenses/by/3.0/"
              },
            ],
          },
          {
            name: "DocBook Project",
            title: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form", 
            description: "DocBook is an XML vocabulary that lets you create documents in a presentation-neutral form that captures the logical structure of your content. Using free tools along with the DocBook XSL stylesheets, you can publish your content as HTML pages, PDF files, a variety of other formats.", 
            link: "http://docbook.sourceforge.net/",
            licenses: [
              {
                name: "MIT-style license",
                link: "http://wiki.docbook.org/DocBookLicense"
              },
            ],
          },
        ],
      };
    },
    get Copyrights() {
      return {
        "en": [
          { prefix: "Copyright (C)", year: "2012-2014", author: "Alexander Kapitman", reserved: "All rights reserved" },
        ],
        "ru": [
          { prefix: "Авторские права (C)", year: "2012-2014", author: "Александр Капитман", reserved: "Все права зарезервированы" },
        ],
        "pl": [
          { prefix: "Copyright (C)", year: "2012-2014", author: "Alexander Kapitman", reserved: "All rights reserved" },
        ],
        "fr": [
          { prefix: "Copyright (C)", year: "2012-2014", author: "Alexander Kapitman", reserved: "Tous droits réservés" },
        ],
      };
    },
    get Title() {
      return {
        "en": "Zool notes",
        "ru": "Чудесные заметки",
        "pl": "Zool notes",
        "fr": "Zool notes",
      };
    },
    get Description() {
      return {
        "en": "Program for creating and managing notes.",
        "ru": "Программа для создания и организации заметок",
        "pl": "Program for creating and managing notes.",
        "fr": "Programme pour créer et gérer des ntoes.",
      };
    }
  };
}();