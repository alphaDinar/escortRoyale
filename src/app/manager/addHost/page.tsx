'use client';
import { fixNote, formHeader } from "../../External/forms";
import { fireStoreDB, storageDB } from "@/Firebase/base";
import { useIsLoading } from "@/app/contexts/isLoadingContext";
import { collection, doc, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Panel from "@/app/components/Panel/Panel";
import styles from '../../styles/forms.module.css';
import { useNotify } from "@/app/contexts/notifyContext";
import Image from "next/image";
import { GrMultimedia } from "react-icons/gr";
import { getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
import { MdAddAPhoto } from "react-icons/md";


interface defType extends Record<string, any> { };
const AddGuest = () => {
  const { setIsLoading } = useIsLoading();
  const { setNotify } = useNotify();

  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1708045670/maqete/place_qlf6zd.jpg';

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [region, setRegion] = useState('');
  const [agency, setAgency] = useState('');
  const [gender, setGender] = useState('Female');
  const [sexPref, setSexPref] = useState('Other');
  const [languages, setLanguages] = useState('');
  const [age, setAge] = useState(0);
  const [ethnic, setEthnic] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [tattoos, setTattoos] = useState('No');
  const [smoke, setSmoke] = useState('No');
  const [piercings, setPiercings] = useState('No');
  const [clients, setClients] = useState('');
  const [outCall, setOutCall] = useState('No');
  const [inCall, setInCall] = useState('No');
  const [straightSex, setStraightSex] = useState('No');
  const [massage, setMassage] = useState('No');
  const [oralSexG, setOralSexG] = useState('No');
  const [oralSexT, setOralSexT] = useState('No');
  const [anal, setAnal] = useState('No');
  const [french, setFrench] = useState('No');
  const [fetish, setFetish] = useState('No');
  const [BDSM, setBDSM] = useState('No');
  const [strip, setStrip] = useState('No');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState('');
  const [level, setLevel] = useState('Premium');
  const [status, setStatus] = useState('Active');
  const [price1, setPrice1] = useState(100);
  const [price2, setPrice2] = useState(200);
  const [price4, setPrice4] = useState(400);
  const [price24, setPrice24] = useState(500);
  const [payOptions, setPayOptions] = useState('');

  const [imagePreview, setImagePreview] = useState(place);
  const [image, setImage] = useState<defType>({});
  const [mediaSet, setMediaSet] = useState(Array(3).fill({ type: 'image', format: 'png' }));
  const [mediaPreviewSet, setMediaPreviewSet] = useState<string[]>(Array(3).fill(place));

  useEffect(() => {
    setIsLoading(false);
  }, [])


  const handleImage = (media: File) => {
    if (media.size / 1000 > 5000) {
      alert(`${media.size / 1000}kb File size exceeded, max of 5 mb`);
    } else {
      const imageData = {
        name: media.name,
        type: media.type.split('/')[0],
        format: media.type.split('/')[1],
        blob: media
      }
      setImage(imageData);
      setImagePreview(URL.createObjectURL(media));
    }
  }

  const handleMediaSet = (media: File, i: number) => {
    if (media.size / 1000 > 3000) {
      alert(`${media.size / 10000}mb File size exceeded, max of 3 mb`);
    } else {
      const mediaPrevTemp = [...mediaPreviewSet];
      mediaPrevTemp[i] = URL.createObjectURL(media);
      setMediaPreviewSet(mediaPrevTemp);
      const mediaSetTemp = [...mediaSet];
      mediaSetTemp[i] = {
        name: media.name,
        type: media.type.split('/')[0],
        format: media.type.split('/')[1],
        blob: media,
      };
      setMediaSet(mediaSetTemp);
    }
  }

  const uploadObj = async (obj: defType) => {
    let set = null;
    const stamp = new Date().getTime();
    const objName = `${obj.name}${stamp}`;
    await uploadBytes(sRef(storageDB, 'MaqProducts/' + objName), obj.blob)
      .then((res) =>
        getDownloadURL(res.ref)
          .then((urlRes) => {
            image['url'] = urlRes;
            delete image.blob
            set = urlRes
          })
          .catch((error) => console.log(error)))
    return set;
  }

  const uploadSet = (mediaSet: defType[]) => {
    const uploadPromises = mediaSet.map((media) => {
      if (media.blob) {
        return uploadBytes(sRef(storageDB, 'MaqProducts/' + media.name), media.blob)
          .then((res) => getDownloadURL(res.ref))
          .catch((error) => console.log(error))
      } else {
        return Promise.resolve('empty');
      }
    })

    return Promise.all(uploadPromises)
      .then((urls) => {
        urls.forEach((urlRes, i) => {
          if (urlRes) {
            mediaSet[i] = {
              ...mediaSet[i],
              url: urlRes
            }
            delete mediaSet[i].blob;
          }
        });
        return mediaSet;
      });
  }


  const createHost = async () => {
    setIsLoading(true);
    const imageUrl = await uploadObj(image);
    if (imageUrl) {
      await uploadSet(mediaSet)
        .then(async () => {
          const stamp = new Date().getTime();
          const hid = `hid${stamp}`;
          await setDoc(doc(fireStoreDB, 'Hosts/' + hid), {
            username: username,
            contact: contact,
            region: region,
            agency: agency,
            level : level,
            gender: gender,
            sexPref: sexPref,
            languages: languages,
            age: age,
            ethnic: ethnic,
            hobbies: hobbies,
            tattoos: tattoos,
            smoke: smoke,
            piercings: piercings,
            clients: clients,
            outCall: outCall,
            inCall: inCall,
            straightSex: straightSex,
            massage: massage,
            oralSexG: oralSexG,
            oralSexT: oralSexT,
            anal: anal,
            french: french,
            fetish: fetish,
            BDSM: BDSM,
            strip: strip,
            bio: bio,
            price1: price1,
            price2: price2,
            price4: price4,
            price24: price24,
            payOptions: payOptions,
            image: image,
            mediaSet: mediaSet,
            timestamp: stamp
          })
            .then(() => {
              // alert("Product added Successfully")
              resetForm();
              setNotify(fixNote('pass', 'Host Created Successfully'));
              setIsLoading(false);
            })
            .catch(() => {
              setNotify(fixNote('fail', 'Select A Room'));
            })
        });
    }

    const resetForm = () => {

    }
  }

  return (
    <Panel>
      <section className={styles.formBox}>
        {formHeader('Add Host')}

        <form onSubmit={(e) => { e.preventDefault(); createHost(); }} >
          <p>
            <span>Username</span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </p>

          <p>
            <span>Contact</span>
            <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </p>

          <p>
            <span>Region</span>
            <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} required />
          </p>

          <p>
            <span>Agency</span>
            <input type="text" value={agency} onChange={(e) => setAgency(e.target.value)} required />
          </p>

          <p>
            <span>Gender</span>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </p>

          <p>
            <span>Sex Pref</span>
            <select value={sexPref} onChange={(e) => setSexPref(e.target.value)}>
              <option value="Straight">Straight</option>
              <option value="Gay">Gay</option>
              <option value="Lesbian">Lesbian</option>
              <option value="Bi-Sexual">Bi-sexual</option>
              <option value="Asexual">Asexual</option>
              <option value="Other">Other</option>
            </select>
          </p>

          <p>
            <span>Languages</span>
            <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} required />
          </p>

          <p>
            <span>Age</span>
            <input type="number" value={age} min={18} onChange={(e) => setAge(parseInt(e.target.value))} required />
          </p>

          <p>
            <span>Ethnic Origin</span>
            <input type="text" value={ethnic} onChange={(e) => setEthnic(e.target.value)} required />
          </p>

          <p>
            <span>Hobbies</span>
            <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} required />
          </p>

          <p>
            <span>Tattoos</span>
            <select value={tattoos} onChange={(e) => setTattoos(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Smoke</span>
            <select value={smoke} onChange={(e) => setSmoke(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Piercings</span>
            <select value={piercings} onChange={(e) => setPiercings(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Clients</span>
            <input type="text" value={clients} onChange={(e) => setClients(e.target.value)} required />
          </p>



          <p>
            <span>Out-call</span>
            <select value={outCall} onChange={(e) => setOutCall(e.target.value)}>
              <option value="Local">Local</option>
              <option value="National">National</option>
              <option value="No">No</option>
            </select>
          </p>

          <p>
            <span>In-call</span>
            <select value={inCall} onChange={(e) => setInCall(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Straight Sex</span>
            <select value={straightSex} onChange={(e) => setStraightSex(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Massage</span>
            <select value={massage} onChange={(e) => setMassage(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>oralSexG</span>
            <select value={oralSexG} onChange={(e) => setOralSexG(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>oralSexT</span>
            <select value={oralSexT} onChange={(e) => setOralSexT(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Anal</span>
            <select value={anal} onChange={(e) => setAnal(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>French</span>
            <select value={french} onChange={(e) => setFrench(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Fetish</span>
            <select value={fetish} onChange={(e) => setFetish(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>BDSM</span>
            <select value={BDSM} onChange={(e) => setBDSM(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>

          <p>
            <span>Strip</span>
            <select value={strip} onChange={(e) => setStrip(e.target.value)}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </p>
          <hr />

          <p>
            <span>Bio</span>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          </p>

          <p>
            <span>Tags</span>
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
          </p>

          <p>
            <span>Level</span>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="Regular">Regular</option>
              <option value="Premium">Premium</option>
            </select>
          </p>

          <p>
            <span>Status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </p>

          <p>
            <span>Price (1hr)</span>
            <input type="number" value={price1} onChange={(e) => setPrice1(parseInt(e.target.value))} required />
          </p>

          <p>
            <span>Price (2hr)</span>
            <input type="number" value={price2} onChange={(e) => setPrice2(parseInt(e.target.value))} required />
          </p>

          <p>
            <span>Price (4hr)</span>
            <input type="number" value={price4} onChange={(e) => setPrice4(parseInt(e.target.value))} required />
          </p>

          <p>
            <span>Price (24hr)</span>
            <input type="number" value={price24} onChange={(e) => setPrice24(parseInt(e.target.value))} required />
          </p>

          <p>
            <span>Payment Options</span>
            <input type="text" value={payOptions} onChange={(e) => setPayOptions(e.target.value)} required />
          </p>
          <hr />

          <section className={styles.galleryBox}>
            <article>
              <Image alt='Add Image' className='cover' fill src={imagePreview} />
              <label htmlFor="addImage">
                <input className="cover" type="file" id="addImage" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleImage(e.target.files![0])} required />
                <MdAddAPhoto className={styles.addPhoto} />
              </label>
            </article>
          </section>

          <section className={styles.galleryBox}>
            {mediaSet.map((el, i) => (
              <article key={i}>
                {mediaSet[i].type === 'image' ?
                  mediaSet[i].format === 'jpeg' ? <Image className="cover" alt='Add Image' fill src={mediaPreviewSet[i]} />
                    : <Image alt='Add Image' className="contain" fill src={mediaPreviewSet[i]} />
                  :
                  <video muted autoPlay loop src={mediaPreviewSet[i]} />
                }
                <label htmlFor={`addMedia${i}`}>
                  <input type="file" accept="image/*,video/*" id={`addMedia${i}`} style={{ display: 'none' }} onChange={(e) => handleMediaSet(e.target.files![0], i)} />
                  <GrMultimedia />
                </label>
              </article>
            ))}
          </section>

          <button>Confirm</button>
        </form>
      </section>
    </Panel>
  );
}

export default AddGuest;