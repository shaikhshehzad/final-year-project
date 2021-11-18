// in controllers folder we import the model and export the functionality



const Bank  =  require('../Models/Banks');

// get all the banks
exports.getAllBanks = ( req, res ) => {
    Bank.find().then(result => {
        res.status(200).json({
        message : "Bank Fetched ",
        banks : result
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });  

}
// get all banks by locations' 

// whatever is written after exports are the methods to be exported !!!!!!!!!!<<<<<<< ============ note

exports.getAllBanksByLocation = ( req, res ) => {
    const cityName = req.params.cityName;
    Bank.find({
        city : cityName

    }).then(result => {
        res.status(200).json({
        message : `Bank Fetched  for ${cityName}`,
        banks : result
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });  


}


// get the bank by id 
exports.getBanksById = ( req, res ) => {
    const bankId = req.params.bankId;
    Bank.find({
        _id : bankId

    }).then(result => {
        res.status(200).json({
        message : `Bank Fetched  for _id ${bankId}`,
        bank : result[0]
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });  

}
//
// filter  the bank based on bloodtype , location , beds ,lcost , hcost , sort , paginations

exports.filterBanks = ( req, res ) => {

    const {

        bloodtype,
        location,
        supplies,
        lcost,
        hcost,
        sort,
        page = 1
    } = req.body;

    // adding the logic to apply filters

    let filters = {};

    if(bloodtype){
        filters.bloodtype_id = bloodtype_id;

    }
    if(location){
        filters.location_id = location_id;

    }
    if(supplies && supplies.length > 0){
        filters['supplies.name'] = {
            $in: supplies
        }

    }
    if(hcost && lcost){
        if (lcost == 0){
            filters.min_price = {
                $lt : hcost
            }
        } else {

            filters.min_price = {
$gt : lcost,
$lt : hcost
            }
        }
    }
    Bank.find(filters).sort({min_price : sort}).then(result => {
        // paginating the results
        const pageSize  = 2;
        let tempArray  = [];
        function paginate(arr , page_size , page_no){
            let paginatedResult = [];

            paginatedResult = arr.slice((page_no - 1) * page_size , page_no * page_size)
            return paginatedResult;
        }
        tempArray  = paginate(result , pageSize , page );
        res.status(200).json({
        message : " filterd Bank Fetched ",
        bank : tempArray
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });  
}


