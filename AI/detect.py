from ultralytics import YOLO

model = YOLO("models/ppe.pt")

results = model.predict(
    source="test.jpg",
    conf=0.1,      # confidence bahut kam kar diya
    save=True
)

for r in results:
    print("Boxes detected:", len(r.boxes))

    for box in r.boxes:
        cls = int(box.cls[0])
        conf = float(box.conf[0])

        print(model.names[cls], round(conf, 2))