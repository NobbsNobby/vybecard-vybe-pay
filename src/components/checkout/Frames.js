import React, { useEffect } from "react";

const FramesEvents = new Map([
  ["READY", "ready"],
  ["FRAME_ACTIVATED", "frameActivated"],
  ["FRAME_FOCUS", "frameFocus"],
  ["FRAME_BLUR", "frameBlur"],
  ["FRAME_VALIDATION_CHANGED", "frameValidationChanged"],
  ["PAYMENT_METHOD_CHANGED", "paymentMethodChanged"],
  ["CARD_VALIDATION_CHANGED", "cardValidationChanged"],
  ["CARD_SUBMITTED", "cardSubmitted"],
  ["CARD_TOKENIZED", "cardTokenized"],
  ["CARD_TOKENIZATION_FAILED", "cardTokenizationFailed"],
]);

const Frames = ({ config, children, cardSubmitted, cardTokenized }) => {
  const initializeFrame = () => {
    try {
      if (window.Frames) {
        window.Frames.init({ ...config, cardSubmitted, cardTokenized });
      } else {
        console.error(
          `Frames was used before the script (from the CDN) was loaded completely`
        );
      }
    } catch (e) {
      throw e;
    }
  };

  const clearEventsHandlers = () => {
    if (window.Frames) {
      FramesEvents.forEach((f, key) => {
        window.Frames.removeAllEventHandlers(window.Frames.Events[key]);
      });
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.onload = initializeFrame;
    }
    initializeFrame();

    return () => clearEventsHandlers();
  }, []);

  return children;
};

export default Frames;
