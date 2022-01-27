import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/loginSlice";
import RecentHistory from "../card/RecentHistory";
import Text from "../typography/Text";

const History = () => {
  const { currentUser } = useSelector((state) => state.login);
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sortedHistory = history?.data?.data
    .sort(function (a, b) {
      return Date.parse(a.created_at) - Date.parse(b.created_at);
    })
    .reverse()
    .slice(0, 5);

  useEffect(() => {
    if(currentUser?.data?.token){
    const getHistory = async () => {
   
      setLoading(true);
      try {
        const res = await axios.get("https://api.stevenhoyo.co/v1/payment/", {
          headers: {
            Authorization: `Bearer ${currentUser?.data?.token}`,
          },
        });
        setHistory(res);
        setLoading(false);
      } catch (err) {
        if (err?.response?.status === 403) {
          dispatch(loginSuccess(null));
          navigate("/tokenexpired");
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    getHistory()};
  }, [currentUser?.data?.token, navigate, dispatch]);
  return (
    <>
      <Box sx={{ marginTop: 3, width: 450 }}>
        <Text text="Terakhir Beli" />
        {loading ? (
          <CircularProgress />
        ) : history ? (
          <Box
            sx={{
              overflowX: "auto",
              width: 400,
              marginTop: 3,
              display: "flex",
              height: 120,
              padding: 1,
            }}
          >
            {sortedHistory?.map((product) => (
              <RecentHistory key={product?.id} listHistory={product} />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              width: 450,
              margin: "auto",
              paddingTop: 1,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ padding: 2, width: 250, textAlign: "Right" }}>
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Belum ada transaksi <br />
                Yuk Beli!
              </Typography>
            </Box>

            <Box
              sx={{
                width: 200,
                marginRight: 1,
                padding: 1,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="./assets/undraw_empty_re_opql.svg"
                alt="middle content"
                width="150px"
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default History;
