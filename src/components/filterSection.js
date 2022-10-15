import { Button, Grid, Typography } from "@mui/material";
import { CustomTextField } from "./customMUI";

export default function FilterSection() {
    return (
        <Grid
            container
            spacing={1}
            sx={{

                minWidth: "100%",
                borderRadius: 2,
                // backgroundColor: "pink",
                mt: 10,
                mb: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

                // boxShadow: "0px 4px 1px 0px #d2c6c6",
            }}
        >
            <Grid
                sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                item
                lg={2} sm={6} xl={2} xs={12}>

                <Typography variant='overline' sx={{ color: "black" }}>Search merchant</Typography>
                <CustomTextField sx={{ width: "100%" }} size="small" label="Merchant" />
            </Grid>
            <Grid
                sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                item
                lg={2} sm={6} xl={2} xs={12}>
                <Typography variant='overline' sx={{ color: "black" }}>Search customer</Typography>

                <CustomTextField size="small" label="Customer" />
            </Grid>
            <Grid
                sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                item
                lg={2} sm={6} xl={2} xs={12}>
                <Typography variant='overline' sx={{ color: "black" }}>Search hsn code</Typography>

                <CustomTextField size="small" label="HSN Codes" />
            </Grid>
            <Grid
                sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                item
                lg={2} sm={6} xl={2} xs={12}>
                <Typography variant='overline' sx={{ color: "black" }}>Search settlement status</Typography>

                <CustomTextField size="small" label="Settlement Status" />
            </Grid>
            <Grid
                sx={{ width: 100, height: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}
                item
                lg={2} sm={12} xl={2} xs={12}>
                <Button
                    sx={{
                        color: "black",
                        backgroundColor: "white",
                        width: "100px",
                        border:"1px solid gray"
                    }}>
                    Clear
                </Button>
            </Grid>
            <Grid
                sx={{ height: "100%", display: "flex", alignItems: "end" }}

                item
                lg={2} sm={12} xl={2} xs={12}>
                <Button
                    sx={{
                        color: "white",
                        background: "#9e0b0f",
                        width: "100px",
                        "&:hover": {
                            backgroundColor: "#e33035"
                        }
                    }}>
                    Filter
                </Button>
            </Grid>
        </Grid >
    )
}