import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import HtmlParser from "../utils/HtmlParser";
import "./Dialog.css";
import descFetch from "../dataFetch/DescFetch";

export default function ScrollDialog({ title, slug }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("body");
  const { desc, fetchDesc, descLoading } = descFetch(slug);

  const handleClickOpen = (scrollType) => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log(desc);

  function openHandler(slug) {
    handleClickOpen("body");
    fetchDesc();
  }

  return (
    <div className="relative">
      <div
        className="relative leading-[1.75rem] font-semibold inline-block cursor-pointer hover:text-blue-500"
        onClick={() => openHandler(slug)}
      >
        {title}
      </div>

      <Dialog
        className="font-quicksand"
        open={open}
        maxWidth="lg"
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-Dialog-title"
        aria-describedby="scroll-Dialog-description"
      >
        <div className=" top-0 right-0  backdrop-blur-3xl background-none flex justify-end">
          <button
            className="text-center  rounded-full w-8 h-8"
            onClick={handleClose}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/multiply.png"
              alt="multiply"
            />
          </button>
        </div>

        <div className="w-full">
          <img
            className="object-cover w-full h-[50vh]"
            src={desc?.blog?.thumb}
            alt=""
          />
        </div>
        <h1 className="font-quicksand text-2xl p-5" id="scroll-Dialog-title">
          {title}
        </h1>
        <DialogContent dividers={scroll === "body"}>
          <div
            className="desc"
            id="scroll-Dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {descLoading ? "loading..." : HtmlParser(desc?.blog?.body)}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
