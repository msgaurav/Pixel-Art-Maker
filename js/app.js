/* Since Script Tag is placed at the end of body so $(document).ready(function(){}); is not required */

// Global Variable Declaration
let colorPicker = $("#colorPicker").val();

// Store Color whenever change its value
$("#colorPicker").change(function(){
	colorPicker = $("#colorPicker").val();
});

// When Size is Submitted by the User
$("#sizePicker").submit(function(){
	event.preventDefault();

	let row = $("#inputHeight").val();
	let col = $("#inputWidth").val();
	let grid = $("#pixelCanvas").html("");
	let tr, td;

	// Make Grids
	for (let i = 0; i < row; i++) {
		tr = $("<tr></tr>");

		for (let j = 0; j < col; j++) {
			td = $("<td></td>");
			tr.append(td);
		}
		grid.append(tr);
	}
});

// Click on Paint Button to add the colors
$("#paintBrush").click(function(){
	$("td").on({
		mousedown: function(){			// Add Colors to Cells on Click
			$(this).css("background-color", colorPicker);
			dragColor = true;
		},
		dblclick: function(){			// Remove Colors on Double Click
			$(this).removeAttr("style");
		},
		mousemove: function(){			// Add Colors with Mouse Drag
			if (dragColor) {
				$(this).css("background-color", colorPicker);
			}
		},
		mouseup: function(){			// Stop Colors dragging when mouse release
			dragColor = false;
		},
	});

	// Active Button's color change to red
	$(this).css("color", "red");
	$("#fillColor").css("color", "#482488");
	$("#eraser").css("color", "#482488");
});

// Click on Fill Button to add colors to all cells
$("#fillColor").click(function(){
	$("td").css("background-color", colorPicker);

	// Active Button's color change to red
	$(this).css("color", "red");
	$("#paintBrush").css("color", "#482488");
	$("#eraser").css("color", "#482488");
});

// Click on Eraser Button to remove colors
$("#eraser").click(function(){
	$("td").on({
		mousedown: function(){			// Remove Colors on single Click
			$(this).removeAttr("style");
			dragEraser = true;
		},
		mousemove: function(){			// Remove Colors with Mouse Dragging
			if (dragEraser) {
				$(this).removeAttr("style");
			}
		},
		mouseup: function(){			// Stop Remove Colors dragging when mouse release
			dragEraser = false;
		},
	});

	// Active Button's color change to red
	$(this).css("color", "red");
	$("#paintBrush").css("color", "#482488");
	$("#fillColor").css("color", "#482488");
});