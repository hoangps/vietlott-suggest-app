$(document).ready(function(){
    $('#home').tab('show');

    setTimeout(function(){
        $('#statisticsTable').DataTable({
            "searching": false,
            "lengthMenu": [[-1, 10], ["Tất cả", "10 dòng mỗi trang"]],
            "aoColumns": [null, null, {"orderSequence": [ "desc", "asc" ]}, {"orderSequence": [ "desc", "asc" ]}],
            "order": [[ 2, "desc" ]],
            "language": {
                "lengthMenu": "Hiển thị _MENU_ ",
                "zeroRecords": "Không có dữ liệu",
                "info": "Trang _PAGE_ / _PAGES_",
                "infoEmpty": "Không có dữ liệu",
                "infoFiltered": "(lọc từ _MAX_ bản ghi)",
                "paginate": {
                    "next": "Sau",
                    "previous": "Trước"
                }
            }
        });
    }, 100);

    // $('#fromDate, #toDate').keyup( function() {
    //     table.draw();
    // } );
});

// $.fn.dataTable.ext.search.push(
//     function( settings, data, dataIndex ) {
//
//         var fromDate = Date.parse( convertToRetardedDate($('#fromDate').val()) );
//         var toDate = Date.parse( convertToRetardedDate($('#toDate').val()) );
//         var date = Date.parse( convertToRetardedDate( data[3] ) ); // use data for the age column
//
//         return fromDate >= date   &&  toDate <= date;
//     }
// );

function convertToRetardedDate(nonRetardedDate){
    if(!nonRetardedDate) return null;

    var datePart = $('#fromDate').val().split('/');
    if(datePart.length != 3) return null;

    datePart[0] = datePart[0] ^ datePart[1];
    datePart[1] = datePart[0] ^ datePart[1];
    datePart[0] = datePart[0] ^ datePart[1];

    return datePart[0] + "/" + datePart[1] + "/" + datePart[2];
}
