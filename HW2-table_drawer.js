function rowHeights(rows) {
    return rows.map(function(row) {
      return row.reduce(function(max, cell) {
        return Math.max(max, cell.minHeight());
      }, 0);
    });
  }

  function colWidths(rows) {
    return rows[0].map(function(_, i) {
      return rows.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth());
      }, 0);
    });
  }

  function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);
    function drawLine(blocks, lineNo) {
      return blocks.map(function(block) {
        return block[lineNo];
      }).join(" ");
    }

    function drawRow(row, rowNum) {
      var blocks = row.map(function(cell, colNum) {
        return cell.draw(widths[colNum], heights[rowNum]);
      });
      return blocks[0].map(function(_, lineNo) {
        return drawLine(blocks, lineNo);
      }).join("\n");
    }

    return rows.map(drawRow).join("\n");
  }

  function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
      result += string;
    return result;
  }

  function TextCell(text) {
    this.text = text.split("\n");
  }

  TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  };

  TextCell.prototype.minHeight = function() {
    return this.text.length;
  };

  TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }
    return result;
  };

  //center justified cell
  function CJustifiedCell(text){
      TextCell.call(this, text);
  }

  CJustifiedCell.prototype = Object.create(TextCell.prototype);

  CJustifiedCell.prototype.draw = function(width, height){
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      var totalPadding = width - line.length;
      var pre = Math.floor(totalPadding/2);
      var post = totalPadding - pre;
      result.push(repeat(" ", pre) + line + repeat(" ", post));
    }
    return result;
  }
  //Bordered cell
  function BorderedCell(text){
      TextCell.call(this, text);
  }

  BorderedCell.prototype = Object.create(TextCell.prototype);

  BorderedCell.prototype.draw = function(width, height){
      var result = [];
      var topBorder = repeat("-", width + 2);
      var bottomBorder = repeat("-", width + 2);
      result.push(topBorder)
      for (var i = 0; i < height; i++) {
          var line = this.text[i] || "";
          var totalPadding = width - line.length;
          result.push("|" + line + repeat(" ", totalPadding) + "|");
      }
      result.push(bottomBorder);
      return result;
  }


  function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
      return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
      return keys.map(function(name) {
        var value = row[name];
        if (typeof value == "number")
          return new RTextCell(String(value));
        else
          return new TextCell(String(value));
      });
    });
    return [headers].concat(body);
  }

  function RTextCell(text) {
    TextCell.call(this, text);
  }

  RTextCell.prototype = Object.create(TextCell.prototype);

  RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(repeat(" ", width - line.length) + line);
    }
    return result;
  };


function upperRow(r, data){
    var newData = data.slice(0); //get a copy of data
    newData[r] = data[r].map(function(cell){
        cell.text = cell.text.map(function(s){
            return s.toUpperCase();
        });
        return cell;
    });
    return newData;
}

function upperColumn(c, data){
    return data.map(function(row){
        cell = row[c];
        cell.text = cell.text.map(function(s){
            return s.toUpperCase();
        })
        return row;
    });
}

//map persons to cells
function mapToCells(data){
    function toString(person){
        var text = "";
        text += "Name: " + person["name"] + "\n";
        text += "Sex: " + person.sex + "\n";
        text += "Born: " + person.born + "\n";
        text += "Died: " + person.died + "\n";
        text += "Father: " + person.father + "\n";
        text += "Mother: " + person.mother;
        return text;
    }

    return data.map(function(row){
        return row.map(function(person){
            return new BorderedCell(toString(person));
        });
    });
}

// Run Program
console.log("Problem 1: ")
  var restaurants = [];
  restaurants.push([new CJustifiedCell("Mastro's Ocean\nClub"), new CJustifiedCell("$$$$")]);
  restaurants.push([new CJustifiedCell("Denny's"), new CJustifiedCell("$")]);
  console.log(drawTable(restaurants) + "\n");

console.log("Problem 2: ")
  restaurants = [];
  restaurants.push([new BorderedCell("Mastro's Ocean\nClub"), new BorderedCell("$$$$")]);
  restaurants.push([new BorderedCell("Denny's"), new BorderedCell("$")]);

  console.log(drawTable(restaurants));


  //Make Ancestor table
var ancestors = [
    [{"name": "Emma de Milliano", "sex": "f",
    "born": 1876, "died": 1956,
    "father": "Petrus de Milliano",
    "mother": "Sophia van Damme"},
    {"name": "Carolus Haverbeke", "sex": "m",
    "born": 1832, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Maria van Brussel"},
    {"name": "Cad Have", "sex": "m",
    "born": 1900, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Carel Haverbeke"}],

    [{"name": "Emma de Milliano", "sex": "f",
    "born": 1876, "died": 1956,
    "father": "Petrus de Milliano",
    "mother": "Sophia van Damme"},
    {"name": "Carolus Haverbeke", "sex": "m",
    "born": 1832, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Maria van Brussel"},
    {"name": "Cad Have", "sex": "m",
    "born": 1900, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Carel Haverbeke"}],

    [{"name": "Emma de Milliano", "sex": "f",
     "born": 1876, "died": 1956,
     "father": "Petrus de Milliano",
     "mother": "Sophia van Damme"},
    {"name": "Carolus Haverbeke", "sex": "m",
     "born": 1832, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Maria van Brussel"},
    {"name": "Cad Have", "sex": "m",
    "born": 1900, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Carel Haverbeke"}]
]


console.log("Problem 5: ");
var data = mapToCells(ancestors);
console.log(drawTable(data));

console.log("Problem  6 - demo of functions in problem 3 and 4: ");
var data = mapToCells(ancestors);
data = upperRow(0, data);
data = upperColumn(2, data);
console.log(drawTable(data));
