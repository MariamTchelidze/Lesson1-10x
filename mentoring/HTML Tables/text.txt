Headmaster Dumbledore is in a bind! The enchanted giant hourglasses in the Great Hall—the ones that track the House Points—have been jammed by a rogue Confundus Charm (suspected to be cast by Peeves).

With the End-of-Term Feast tonight, the students have no way of knowing who is winning the House Cup! Hermione Granger suggests a Muggle workaround: a digital scoreboard.

Your Quest: You must weave an HTML structure to display the current point standings for Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. You will also need to account for Dumbledore's chaotic last-minute point awards.

Constraints:

You must use Semantic Table Tags (<thead>, <tbody>, <tfoot>).

You must use colspan to merge cells for Dumbledore's special announcement.

Forbidden: Do not use CSS for layout (we are doing raw structural magic only).

🔨 Step-by-Step Instructions
Part 1: Casting the Frame (<table>) Every spell needs a container. Create your main table element.

Give it a border="1" attribute so the students can see the grid lines (our magic is currently low-res).

Add a <caption> titled "Hogwarts House Points Standings".

Part 2: The Prefect's Header (<thead>) We need to define what the columns represent.

Summon a <thead> section.

Inside a row (<tr>), create three Table Headers (<th>):

House Crest

Current Points

Head of House

Part 3: Filling the Hourglasses (<tbody>) Now, populate the table with the current data. Use <tbody> to hold these rows.

Create a row (<tr>) for Gryffindor: 482 Points, Prof. McGonagall.

Create a row for Slytherin: 472 Points, Prof. Snape.

Create a row for Hufflepuff: 352 Points, Prof. Sprout.

Create a row for Ravenclaw: 426 Points, Prof. Flitwick.
Part 4: The "Dumbledore Factor" (<tfoot>) Just when Slytherin thinks they've won (or lost), Dumbledore stands up! Use the <tfoot> for the final total row.

Create a new row (<tr>) inside <tfoot>.

The first cell should say: "Total Winner:".

The Twist: The second cell needs to span across the remaining two columns to announce the winner in a big way. Use the colspan="2" attribute on a <td> element.

Inside that spanned cell, write: "Gryffindor (Thanks to Neville!)".

✅ Checklist for Success
Before you submit your spellwork to the Ministry of Magic, ensure:

[ ] The <caption> is visible at the top of the table.

[ ] <thead>, <tbody>, and <tfoot> are used in the correct order.

[ ] The table headers (<th>) are bold/centered by default.

[ ] You have 4 rows of house data in the body.

[ ] The final row in the footer merges the last two cells using colspan="2".