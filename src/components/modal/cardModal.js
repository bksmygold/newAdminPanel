import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Table from '../utility/table';
import { useTheme } from "@mui/styles";
import { Box, Container, Grid } from '@mui/system';
import { Slide } from '@mui/material';
import Invoice from '../invoice';
//======================================================
function SimpleDialog(props) {
    const theme = useTheme()
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} transitionDuration={350} TransitionComponent={Slide}
            open={open}>
            <DialogTitle>{props.bids ? "Bids Details" : "Item Details"}</DialogTitle>
            {/* <Invoice invoice={{fullName:"nischal"}}/> */}
            {props.item ? props.item.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Name :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.name}</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Details :</Typography>
                        <ul style={{ listStyle: "none" }}>
                            {x.details ? x.details.map(z => (
                                <Typography sx={theme.custom.typography.cardModal} >{z}</Typography>
                            )) : null}
                        </ul>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Photo :</Typography>
                        <img width={70} src={x.photo} />
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.weight} gm</Typography>
                    </Box>
                </>
            )) : props.data ? props.data.map(z => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Purity :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.purity}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.weight}</Typography>
                    </Box>

                </>
            )) : props.sub ? props.sub.map(z => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >amount_paid :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.amount_paid}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >razorpay_fees :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.razorpay_fees}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >settled_amount :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.settled_amount}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >settled_on :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.settled_on}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >transaction_on :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.transaction_on}</Typography>
                    </Box>

                </>
            )) : props.buyerBids ? props.buyerBids.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Name :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.sellerName}</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Payment :</Typography>
                        <ul style={{ listStyle: "none" }}>
                            {x.payment ? x.payment.map(z => (
                                <>
                                    <Typography sx={theme.custom.typography.cardModal} >mode :</Typography>
                                    <Typography sx={theme.custom.typography.cardModal}>{z.mode}</Typography>
                                    <Typography sx={theme.custom.typography.cardModal} >transferred_amount :</Typography>
                                    <Typography sx={theme.custom.typography.cardModal}>{z.transferred_amount}</Typography>
                                </>
                            )) : null}
                        </ul>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >commission :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.commission}</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >merchant_settlement_value :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.merchant_settlement_value} ₹</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >razorpay_settlement_on :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.razorpay_settlement_on} </Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >custodian :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.custodian} </Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >custody_certificate :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.custody_certificate} </Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >sale_invoice :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.sale_invoice}</Typography>
                    </Box>
                </>
            )) : props.customerReferral ? props.customerReferral.map(x => (<>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >customer :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.customer}</Typography>
                </Box>



                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >email :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.email}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >phone :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.phone}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >first_plan :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.first_plan}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >installments :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.installments}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >last_installments_paid_on :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.last_installments_paid_on}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >plan_status :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.plan_status}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >mature_on :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.mature_on}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >custodian :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.custodian}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >custody_certificate :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.custody_certificate}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >referral_gold_afterMaturity :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.referral_gold_afterMaturity} gm</Typography>
                </Box>
            </>)) : props.salesAssociateReferral ? props.salesAssociateReferral.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >customer :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.customer}</Typography>
                    </Box>



                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >email :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.email}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >phone :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.phone}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >first_plan :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.first_plan}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >installments :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.installments}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >last_installments_paid_on :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.last_installments_paid_on}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >plan_status :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.plan_status}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >mature_on :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.mature_on}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >custodian :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.custodian}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >custody_certificate :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.custody_certificate}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >referral_gold_afterMaturity :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.referral_gold_afterMaturity} gm</Typography>
                    </Box>
                </>
            )) : props.salesOfferReferral ? props.salesOfferReferral.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >customer :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.customer}</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >email :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.email}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >phone :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.phone}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >referral_gold_weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.referral_gold_weight}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >joining_gold_weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.joining_gold_weight}</Typography>
                    </Box>

                </>
            )) : props.vipReferral ? props.vipReferral.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >customer :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.customer}</Typography>
                    </Box>



                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >email :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.email}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >phone :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.phone}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >referral_gold_weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.referral_gold_weight}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >sale_invoice :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.sale_invoice}</Typography>
                    </Box>

                </>
            )) : props.uploadTransaction ? props.uploadTransaction.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >merchant :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.merchant}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >customer :</Typography>
                        <ul style={{ listStyle: "none" }}>
                            {x.customer ? x.customer.map(z => (
                                <>
                                    <Typography sx={theme.custom.typography.cardModal} >name : <span>{z.name}</span></Typography>
                                    <Typography sx={theme.custom.typography.cardModal} >email : <span>{z.email}</span></Typography>
                                    <Typography sx={theme.custom.typography.cardModal} >phone : <span>{z.phone}</span></Typography>

                                </>
                            )) : null}
                        </ul>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >date_time :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.date_time}</Typography>
                    </Box>



                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >rescheduled :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.rescheduled}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >rescheduled_date_time :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.rescheduled_date_time}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >appointment_status :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.appointment_status}</Typography>
                    </Box>

                </>
            )) : props.itemDetail ? props.itemDetail.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >item_name :</Typography>
                        <Typography sx={[theme.custom.typography.cardModal,{mr:6}]}>{x.item_name}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >details :</Typography>
                        <ul style={{ listStyle: "none" }}>
                            {x.details ? x.details.map(z => (
                                <>
                                    <Typography sx={theme.custom.typography.cardModal} >styleName : <span>{z.styleName}</span></Typography>
                                    <Typography sx={theme.custom.typography.cardModal} >pieces : <span>{z.pieces}</span></Typography>
                                    <Typography sx={theme.custom.typography.cardModal} >weight : <span>{z.weight}</span></Typography>

                                </>
                            )) : null}
                        </ul>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >photo :</Typography>
                        <img width={150} src={x.photo} style={{marginRight:30}}/>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >gross_weight :</Typography>
                        <Typography sx={[theme.custom.typography.cardModal,{m:"auto"}]}>{x.gross_weight}</Typography>
                    </Box>

                </>
            )) : props.verifiedDetail ? props.verifiedDetail.map(x => (
                <>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >verified_by :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.verified_by}</Typography>
                </Box>
               

                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >captain :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.captain}</Typography>
                </Box>



                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >manager :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.manager}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >guard :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.guard}</Typography>
                </Box>
                <Box sx={theme.custom.cardModal.box}>
                    <Typography sx={theme.custom.typography.cardModal} >vehicle_no :</Typography>
                    <Typography sx={theme.custom.typography.cardModal}>{x.vehicle_no}</Typography>
                </Box>

            </>
            )):null}
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

//======================================================================
export default function CardModal(props) {
    const theme = useTheme()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                sx={[theme.custom.editButton]}>
                Details
            </Button>

            <SimpleDialog
                item={props.item}
                data={props.data}
                sub={props.sub}
                buyerBids={props.buyerBids}
                customerReferral={props.customerReferral}
                salesAssociateReferral={props.salesAssociateReferral}
                salesOfferReferral={props.salesOfferReferral}
                vipReferral={props.vipReferral}
                uploadTransaction={props.uploadTransaction}
                itemDetail={props.itemDetail}
                verifiedDetail={props.verifiedDetail}

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
