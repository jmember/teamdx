function genCanvas() {
	var ref = new Firebase("https://flickering-fire-9736.firebaseio.com/Canvas");

	ref.once('value', function (snapshot) {
		var container = document.getElementById("canvas_container");

		var m_tbl = document.createElement("TABLE");
		m_tbl.setAttribute("class","table");
		var m_body = document.createElement("TBODY" );
		m_tbl.appendChild( m_body );
		var m_row = document.createElement("TR");
		var m_cell_1 = document.createElement("TH");
		var m_cell_2 = document.createElement("TH");

		var p_tbl = document.createElement("TABLE");
		var p_body = document.createElement("TBODY");
		p_tbl.appendChild( p_body);
		p_tbl.setAttribute("class","table");
		var p_row = document.createElement("TR");
		var p_cell_1 = document.createElement("TH");
		var p_cell_2 = document.createElement("TH");

		m_cell_1.appendChild(document.createTextNode("Method"));
		m_cell_2.appendChild(document.createTextNode("Description"));
		m_row.appendChild(m_cell_1);
		m_row.appendChild(m_cell_2);
		m_body.appendChild(m_row);

		p_cell_1.appendChild(document.createTextNode("Property"));
		p_cell_2.appendChild(document.createTextNode("Description"));
		p_row.appendChild(p_cell_1);
		p_row.appendChild(p_cell_2);
		p_body.appendChild(p_row);

		container.appendChild(m_tbl);
		container.appendChild(p_tbl);

		snapshot.forEach(function(c) {
			var _row = document.createElement("TR");
			var _cell1 = document.createElement("TD");
			var _cell2 = document.createElement("TD");
			var _anchor = document.createElement("A");


			_cell1.appendChild(document.createTextNode(c.key()));
			_cell2.appendChild(document.createTextNode(c.child("desc").val()));
			_row.appendChild(_cell1);
			_row.appendChild(_cell2);

			if (c.child("category").val() == "method")
				m_body.appendChild(_row);
			else
				p_body.appendChild(_row);
		});
	});
}
